import {GenericProps} from '../common/types';
import {useDispatch} from 'react-redux';
import {toDashboard} from '../redux/slices/page';

type Props = GenericProps & {};
function Navbar(props: Props) {
    const dispatch = useDispatch();

    return(<nav className={'w-100 bg-indigo-700 p-2'}>
        <button onClick={e => dispatch(toDashboard())} className={'btn bg-indigo-500 rounded text-white p-1'}>
            Dashboard
        </button>
    </nav>)
}

export {Navbar};
