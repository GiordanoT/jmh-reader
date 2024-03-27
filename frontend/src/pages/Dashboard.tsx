import {useDispatch, useSelector} from 'react-redux';
import {State} from '../common/types';
import {toBenchmark} from '../redux/slices/page';

function Dashboard() {
    const benchmarks = useSelector((state: State) => state.benchmarks);
    const dispatch = useDispatch();

    return(<section>
        {benchmarks.map(benchmark => <div key={benchmark} className={'p-2 bg-green-200'}>
            <b className={'mr-2'}>{benchmark}</b>
            <button onClick={e => dispatch(toBenchmark(benchmark))} className={'btn bg-blue-800 p-1 text-white'}>
                view
            </button>
        </div>)}
    </section>);
}

export default Dashboard;
