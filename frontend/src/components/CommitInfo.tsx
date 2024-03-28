import {Commit, GenericProps} from '../common/types';
import {ViolinChart} from "./ViolinChart";

type Props = GenericProps & {commit: Commit};
function CommitInfo(props: Props) {
    const {commit} = props;

    const forks: number[][][] = Array.from({length: commit.forks}, () => []);
    for(const run of commit.data) {
        let index = 0;
        for(const fork of run) {
            forks[index].push(fork);
            index += 1;
        }
    }

    return(<div className={'m-3 p-3 border border-indigo-400 rounded d-flex'}>
        <label>Comment: <b>{commit.comment || 'None'}</b></label>
        <label className={'ml-2'}>JDK: <b>{commit.jdk}</b></label>
        <label className={'ml-2'}>Forks: <b>{commit.forks}</b></label>
        <label className={'ml-2'}>Iterations: <b>{commit.iterations}</b></label>
        <label className={'ml-2'}>Threads: <b>{commit.threads}</b></label>
        <label className={'ml-2'}>Mode: <b>{commit.mode}</b></label>
        {forks.map((fork, index) => <div>
            <ViolinChart title={`FORK #${index + 1}`} data={fork} />
        </div>)}
    </div>);
}

export {CommitInfo};
