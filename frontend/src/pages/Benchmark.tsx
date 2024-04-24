import {useSelector} from 'react-redux';
import {Commit, GenericProps, State} from '../common/types';
import {CommitInfo, Navbar} from '../components';
import U from '../common/u';

type Props = GenericProps & {name: string};
function Benchmark(props: Props) {
    const {name} = props;
    const commits = useSelector((state: State) => state.commits.filter(commit => commit.benchmark === name));
    const params = U.removeDuplicates<string>(commits.map(c => JSON.stringify(c.params)))

    return(<section>
        <Navbar />
        <div className={'p-3'}>Benchmark: <b>{name}</b> ({commits.length} commits)</div>
        {params.map(p => <div>
            <b>{p}</b>
            {commits.filter(c => p === JSON.stringify(c.params)).map(c => <div>
                {JSON.stringify(c.data)}
            </div>)}
        </div>)}
    </section>);
}

export {Benchmark};
