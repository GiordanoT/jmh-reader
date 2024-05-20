import Plot from 'react-plotly.js';
import {Data} from 'plotly.js';
import {GenericProps} from '../common/types';
import U from '../common/u';
import {useState} from "react";

type Props = GenericProps & {data: number[][][]};
function ModeChart(props: Props) {
    const {data} = props;
    const [show, setShow] = useState(false);
    const y: number[] = [];
    for(const commit of data) {
        y.push(U.mode(commit));
    }

    const trace: Data = {
        y,
        x: y.map((v, index) => `commit ${index + 1}`),
        mode: 'lines+markers',
        type: 'scatter',
        hoverinfo: 'y'
    };

    return(<div style={{marginTop: '2px'}}>
        <div className={'d-flex'}>
            <button onClick={() => setShow(!show)} className={'btn bg-indigo-500 px-1 text-white rounded mr-1'}>
                <i className={show ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill'} />
            </button>
            <b>Mode</b>
        </div>
        {show && <Plot
            style={{width: '100%'}}
            data={[trace]}
            layout={{autosize: true}}
            config={{displayModeBar: false}}
        />}
    </div>);
}
export {ModeChart};
