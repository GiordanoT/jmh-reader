import {GenericProps} from '../common/types';
import Plot from 'react-plotly.js';

type Props = GenericProps & {type: 'bar'|'scatter', x: number[], y: number[], title: string};
function Chart(props: Props) {
    const {type, x, y, title} = props;

    return <Plot data={[{type, x, y}]} layout={{title}} />
}

export {Chart};
