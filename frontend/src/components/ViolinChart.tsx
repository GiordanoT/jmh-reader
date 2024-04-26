import Plot from 'react-plotly.js';
import {Data} from 'plotly.js';
import {GenericProps} from '../common/types';

type Props = GenericProps & {title: string, data: number[][]};
function ViolinChart(props: Props) {
    const {title, data} = props;
    const traces: Data[] = data.map((v, i) => {return {
        y: v,
        name: `commit ${i + 1}`,
        type: 'violin',
        hoverinfo: 'y'
    }});

    console.log(title)
    return(<Plot
        style={{width: '100%'}}
        data={traces}
        layout={{
            autosize: true,
            title: {
                text: title.replace(/"/g, '').replace(',', ', '),
                font: {
                    size: 18,
                    color: 'black',
                    family: 'Arial',
                }
            }
        }}
        config={{displayModeBar: false}}
    />);
}
export {ViolinChart};
