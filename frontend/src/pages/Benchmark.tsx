import {useSelector} from 'react-redux';
import {Commit, GenericProps, State} from '../common/types';
import {Navbar, Parametrized} from '../components';
import U from '../common/u';
import Commits from "../common/commits";

type Props = GenericProps & {name: string};
function Benchmark(props: Props) {
    const {name} = props;
    const commits = useSelector((state: State) => state.commits.filter(commit => commit.benchmark === name));
    const params = U.removeDuplicates<string>(commits.map(c => JSON.stringify(c.params)));
    const parametrized: {[key: string]: Commit[]} = {};
    for(const p of params) parametrized[p] = commits.filter(c => p === JSON.stringify(c.params));
    const commitsById = U.groupBy(commits, commit => commit.id);

    return(<section>
        <Navbar />
        <div className={'p-3'}>Benchmark: <b>{name}</b> ({commitsById.size} commits)</div>
        {/* Commits Info */}
        {Array.from(commitsById).map(([id, c], i) => <div className={'p-1'} key={id}>
            <label className={'ml-2'}><b>#{i + 1}</b></label>
            <label className={'ml-2'}>Comment: <b>{c[0].comment}</b></label>
            <label className={'ml-2'}>JDK: <b>{c[0].jdk}</b></label>
            <label className={'ml-2'}>Forks: <b>{c[0].forks}</b></label>
            <label className={'ml-2'}>Iterations: <b>{c[0].iterations}</b></label>
            <label className={'ml-2'}>Threads: <b>{c[0].threads}</b></label>
            <label className={'ml-2'}>Mode: <b>{c[0].mode}</b></label>
            <button onClick={async() => {
                await Commits.delete(c[0].id);
                U.refresh();
            }} className={'ml-4 btn bg-red-700 rounded text-white px-1'}>
                <i className={'bi bi-trash-fill'} />
            </button>
        </div>)}
        <div className={'m-3 p-3 border border-dashed border-indigo-400 rounded d-flex'}>
            {/* Commits Data */}
            {Object.entries(parametrized).map(([p, c]) =>
                <Parametrized key={p} params={p} iterations={c[0] ? c[0].iterations : 0} forksNumber={c[0] ? c[0].forks : 0} data={c.map(_c => _c.data)} />)
            }
        </div>
    </section>);
}

export {Benchmark};
