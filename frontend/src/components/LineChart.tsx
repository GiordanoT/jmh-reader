import Plot from 'react-plotly.js';
import {Data} from 'plotly.js';
import {GenericProps} from '../common/types';

type Props = GenericProps & {data: number[]};
function LineChart(props: Props) {
    const {data} = props;
    const trace: Data = {
        y: data,
        mode: 'lines+markers',
        type: 'scatter',
        hoverinfo: 'y'
    };

    return(<Plot style={{width: '100%'}} data={[trace]} layout={{autosize: true, title: 'Score'}} />);
}
export {LineChart};
