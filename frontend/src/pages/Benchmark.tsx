import {useSelector} from 'react-redux';
import {GenericProps, State} from '../common/types';
import {CommitInfo, Navbar} from '../components';

type Props = GenericProps & {name: string};
function Benchmark(props: Props) {
    const {name} = props;
    const commits = useSelector((state: State) => state.commits.filter(commit => commit.benchmark === name));

    return(<section>
        <Navbar />
        <div className={'p-3'}>Benchmark: <b>{name}</b> ({commits.length} commits)</div>
        {commits.map(commit => <CommitInfo key={commit.id} commit={commit} />)}
    </section>);
}

export {Benchmark};
