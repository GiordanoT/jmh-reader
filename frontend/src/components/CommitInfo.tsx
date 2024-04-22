import {Commit, GenericProps} from '../common/types';
import {ViolinChart} from './ViolinChart';
import {LineChart} from './LineChart';
import Commits from '../common/commits';
import U from '../common/u';
import {useState} from 'react';

type Props = GenericProps & {commit: Commit};
function CommitInfo(props: Props) {
    const {commit} = props;
    const [show, setShow] = useState(false);

    const forks: number[][][] = Array.from({length: commit.forks}, () => []);
    for(const run of commit.data) {
        let index = 0;
        for(const fork of run) {
            forks[index].push(fork);
            index += 1;
        }
    }

    return(<div className={'m-3 p-3 border border-indigo-400 rounded d-flex'}>
        <button onClick={e => setShow(!show)} className={'btn bg-indigo-500 rounded text-white px-1'}>
            {(show) ? <i className={'bi bi-eye-fill'} /> : <i className={'bi bi-eye-slash-fill'} />}
        </button>
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
        {show && <>
            <LineChart title={`Score (${commit.unit})`} data={commit.score} />
            {forks.map((fork, index) => <div>
                <ViolinChart title={`FORK #${index + 1}`} data={fork} />
            </div>)}
        </>}
    </div>);
}

export {CommitInfo};
