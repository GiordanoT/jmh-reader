import {Request, Response} from 'express';
import {Commits} from '../../db';
import U from '../../common/u';

export class CommitsController {
    static create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = `${Date.now()}_${U.getRandomString(5)}`;
            const {comment} = req.body;
            const file = req.file;
            if (!file) return res.status(400).send('Missing required parameters (file).');
            const objects = JSON.parse(file.buffer.toString('utf-8'));
            if (objects.length <= 0) return res.status(500).send('File Does Not Contain Entries.');
            for(const object of objects) {
                const raw = {
                    id: id,
                    comment: comment || 'Uncomment',
                    benchmark: object['benchmark'],
                    mode: object['mode'],
                    threads: object['threads'],
                    iterations: object['measurementIterations'],
                    forks: object['forks'],
                    jdk: object['jdkVersion'],
                    params: object['params'],
                    unit: object['primaryMetric']['scoreUnit'],
                    data: object['primaryMetric']['rawData']
                };
                await Commits.create(raw);
            }
            return res.status(200).send('Commit Added.');
        } catch (error) {return res.status(400).send(error);}
    }

    static get = async (req: Request, res: Response): Promise<Response> => {
        try {
            const DBCommits = await Commits.getAll();
            const commits = [];
            for (const DBCommit of DBCommits) {
                const commit = {};
                for (const key in Commits.keys)
                    commit[key] = DBCommit[key];
                commits.push(U.clean(commit));
            }
            return res.status(200).send(commits);
        } catch(error) {return res.status(400).send(error);}
    }

    static delete = async(req: Request, res: Response): Promise<Response> => {
        try {
            const {id} = req.params;
            await Commits.delete(id);
            return res.status(200).send('Commit Deleted.');
        } catch(error) {return res.status(400).send(error);}
    }
}
