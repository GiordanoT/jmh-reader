import {useSelector} from 'react-redux';
import {State} from '../common/types';

function Dashboard() {
    const commits = useSelector((state: State) => state.commits);

    return(<div>
        {commits.map(commit => <div className={'p-2 bg-green-200'}>
            <b>{commit.benchmark}</b>
        </div>)}
    </div>);
}

export default Dashboard;
