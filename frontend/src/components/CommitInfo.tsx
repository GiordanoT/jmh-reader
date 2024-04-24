import {Commit, GenericProps} from '../common/types';
import Commits from '../common/commits';
import U from '../common/u';
// import {ViolinChart} from './ViolinChart';

type Props = GenericProps & {commit: Commit};
function CommitInfo(props: Props) {
    const {commit} = props;

    /*
    const forks: number[][] = Array.from({length: commit.forks}, () => []);
    for(const run of commit.data) {
        let index = 0;
        for(const fork of run) {
            forks[index].push(fork);
            index += 1;
        }
    }
    */

    return(<div className={'m-3 p-3 border border-indigo-400 rounded d-flex'}>
        <label className={'ml-2'}>Comment: <b>{commit.comment || 'None'}</b></label>
        <label className={'ml-2'}>JDK: <b>{commit.jdk}</b></label>
        <label className={'ml-2'}>Forks: <b>{commit.forks}</b></label>
        <label className={'ml-2'}>Iterations: <b>{commit.iterations}</b></label>
        <label className={'ml-2'}>Threads: <b>{commit.threads}</b></label>
        <label className={'ml-2'}>Mode: <b>{commit.mode}</b></label>
        <button onClick={async() => {
                await Commits.delete(commit.id);
                U.refresh();
            }} className={'ml-4 btn bg-red-700 rounded text-white px-1'}>
            <i className={'bi bi-trash-fill'} />
        </button>
    </div>);
}

export {CommitInfo};
