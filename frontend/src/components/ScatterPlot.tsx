import Plot from 'react-plotly.js';
import {Data} from 'plotly.js';
import {GenericProps} from '../common/types';
import {useState} from "react";
import U from "../common/u";

type Props = GenericProps & {iterations: number, forksNumber: number, data: number[][][]};
function ScatterPlot(props: Props) {
    const {iterations, forksNumber, data} = props;
    const [show, setShow] = useState(false);

    const traces: Data[] = [];
    for(let i = 0; i < data.length; i++) {
        const commit = data[i];
        const values = commit.flatMap(c => c);
        traces.push({
            y: U.generateForks(iterations, forksNumber),
            x: values.map(v => `commit ${i + 1}`),
            z: values,
            name: `commit ${i + 1}`,
            mode: 'markers',
            type: 'scatter3d',
            hoverinfo: 'z'
        });
        /*
        for(let j = 0; j < commit.length; j++) {
            const fork = commit[j];
            traces.push({
                y: fork.map(v => `commit ${i + 1}`),
                x: fork,
                mode: 'markers',
                type: 'scatter',
                hoverinfo: 'x',
            });
        }
        */
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
