import {useDispatch, useSelector} from 'react-redux';
import {GenericProps, State} from '../common/types';
import {toBenchmark} from '../redux/slices/page';
import {Navbar} from '../components';

type Props = GenericProps & {};
function Dashboard(props: Props) {
    const benchmarks = useSelector((state: State) => state.benchmarks);
    const dispatch = useDispatch();

    return(<section>
        <Navbar />
        <h2 className={'p-3 font-bold'}>Benchmarks</h2>
        {benchmarks.map(benchmark => <div className={'m-1 p-3 border border-indigo-400 rounded d-flex'} key={benchmark}>
            <button onClick={e => dispatch(toBenchmark(benchmark))} className={'btn bg-indigo-500 px-1 text-white rounded'}>
                <i className={'bi bi-eye-fill'} />
            </button>
            <b className={'ml-2'}>{benchmark}</b>
        </div>)}
    </section>);
}

export {Dashboard};
