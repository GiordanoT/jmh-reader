import {useDispatch, useSelector} from 'react-redux';
import {State} from '../common/types';
import {toDashboard} from '../redux/slices/page';

function Benchmark(props: {name: string}) {
    const {name} = props;
    const commits = useSelector((state: State) => state.commits);
    const dispatch = useDispatch();

    return(<section className={'p-2'}>
        Benchmark single page: <b>{name}</b>
        <button onClick={e => dispatch(toDashboard())} className={'ml-2 btn bg-red-800 p-1 text-white'}>
            back
        </button>
    </section>);
}

export default Benchmark;
