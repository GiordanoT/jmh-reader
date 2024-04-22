import Plot from 'react-plotly.js';
import {Data} from 'plotly.js';
import {GenericProps} from '../common/types';

type Props = GenericProps & {title: string, data: number[][]};
function ViolinChart(props: Props) {
    const {title, data} = props;
    const traces: Data[] = data.map(vector => {return {
        y: vector,
        type: 'violin',
        hoverinfo: 'y'
    }});

    return(<Plot style={{width: '100%'}} data={traces} layout={{autosize: true, title}} />)
}
export {ViolinChart};
