import Plot from 'react-plotly.js';
import {Data} from 'plotly.js';
import {GenericProps} from '../common/types';

type Props = GenericProps & {title: string, data: number[]};
function LineChart(props: Props) {
    const {title, data} = props;
    const trace: Data = {
        y: data,
        x: data.map((value, index) => `trace ${index}`),
        mode: 'lines+markers',
        type: 'scatter',
        hoverinfo: 'y'
    };

    return(<Plot style={{width: '100%'}} data={[trace]} layout={{autosize: true, title}} />);
}
export {LineChart};
