import {GenericProps} from '../common/types';
import {Oval} from 'react-loader-spinner';

type Props = GenericProps & {};
function Loader(props: Props) {
    return(<div className={'loader'}>
        <Oval height={50} width={50} wrapperStyle={{justifyContent: 'center'}} wrapperClass={'mt-3'}
              color={'rgba(0, 0, 0, 0.9)'} secondaryColor={'rgba(0, 0, 0, 0.6)'} />
    </div>);
}

export {Loader};
