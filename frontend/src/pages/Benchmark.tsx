import {useSelector} from 'react-redux';
import {GenericProps, State} from '../common/types';
import {Chart, Navbar} from '../components';

type Props = GenericProps & {name: string};
function Benchmark(props: Props) {
    const {name} = props;
    const commits = useSelector((state: State) => state.commits.filter(commit => commit.benchmark === name));

    return(<section>
        <Navbar />
        <div className={'p-3'}>Benchmark: <b>{name}</b> ({commits.length} commits)</div>
        {commits.map(commit => <div className={'m-1 p-3 border border-indigo-400 rounded d-flex'} key={commit.id}>
            <label>Comment: <b>{commit.comment || 'None'}</b></label>
            <label className={'ml-2'}>JDK: <b>{commit.jdk}</b></label>
            <label className={'ml-2'}>Forks: <b>{commit.forks}</b></label>
            <label className={'ml-2'}>Iterations: <b>{commit.iterations}</b></label>
            <label className={'ml-2'}>Threads: <b>{commit.threads}</b></label>
            <label className={'ml-2'}>Mode: <b>{commit.mode}</b></label>
        </div>)}
        <hr className={'my-3'} />
        {commits.map(commit => <div className={'p-2 d-block'} key={commit.id}>
            {JSON.stringify(commit.score)} <br />
            {JSON.stringify(commit.data)}
        </div>)}
        <Chart type={'scatter'} x={[1, 2, 3]} y={[2, 5, 3]} title={'Test'} />
    </section>);
}

export {Benchmark};
