import Plot from 'react-plotly.js';
import {Data} from 'plotly.js';
import {GenericProps} from '../common/types';
import U from '../common/u';
import {useState} from "react";

type Props = GenericProps & {data: number[][][]};
function StatisticsChart(props: Props) {
    const {data} = props;
    const [show, setShow] = useState(false);
    const mean: number[] = [];
    const median: number[] = [];
    const mode: number[] = [];
    const percentile: number[] = [];
    for(const commit of data) {
        mean.push(U.mean(commit));
        median.push(U.median(commit));
        mode.push(U.mode(commit));
        percentile.push(U.percentile(commit, 95));
    }

    const traces: Data[] = [];
    traces.push({
        y: mean,
        x: mean.map((v, index) => `commit ${index + 1}`),
        name: 'mean',
        type: 'scatter',
        hoverinfo: 'y'
    });
    traces.push({
        y: median,
        x: median.map((v, index) => `commit ${index + 1}`),
        name: 'median',
        type: 'scatter',
        hoverinfo: 'y'
    });
    traces.push({
        y: mode,
        x: mode.map((v, index) => `commit ${index + 1}`),
        name: 'mode',
        type: 'scatter',
        hoverinfo: 'y'
    });
    traces.push({
        y: percentile,
        x: percentile.map((v, index) => `commit ${index + 1}`),
        name: '95% percentile',
        type: 'scatter',
        hoverinfo: 'y'
    });

    return(<div style={{marginTop: '2px'}}>
        <div className={'d-flex'}>
            <button onClick={() => setShow(!show)} className={'btn bg-indigo-500 px-1 text-white rounded mr-1'}>
                <i className={show ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill'} />
            </button>
            <b>Statistics</b>
        </div>
        {show && <Plot
            style={{width: '100%'}}
            data={traces}
            layout={{autosize: true}}
            config={{displayModeBar: false}}
        />}
    </div>);
}
export {StatisticsChart};
