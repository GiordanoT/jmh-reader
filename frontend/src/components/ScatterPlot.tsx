import Plot from 'react-plotly.js';
import {Data} from 'plotly.js';
import {GenericProps} from '../common/types';
import {useState} from "react";

type Props = GenericProps & {data: number[][][]};
function ScatterPlot(props: Props) {
    const {data} = props;
    const [show, setShow] = useState(false);

    const traces: Data[] = [];
    for(let i = 0; i < data.length; i++) {
        const commit = data[i];

        for(let j = 0; j < commit.length; j++) {
            const fork = commit[j];
            traces.push({
                y: fork,
                x: fork,
                name: `commit ${i + 1} - fork ${j + 1}`,
                mode: 'markers',
                type: 'scatter',
                hoverinfo: 'y'
            });
        }
    }

    return(<div style={{marginTop: '2px'}}>
        <div className={'d-flex'}>
            <button onClick={() => setShow(!show)} className={'btn bg-indigo-500 px-1 text-white rounded mr-1'}>
                <i className={show ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill'} />
            </button>
            <b>Scatter Plot</b>
        </div>
        {show && <Plot
            style={{width: '100%'}}
            data={traces}
            layout={{autosize: true}}
            config={{displayModeBar: false}}
        />}
    </div>);
}
export {ScatterPlot};
