import Plot from 'react-plotly.js';
import {Data} from 'plotly.js';
import {GenericProps} from '../common/types';
import {useState} from 'react';

type Props = GenericProps & {title: string, data: number[][][]};
function ViolinChart2(props: Props) {
    const {title, data} = props;
    const [show, setShow] = useState(false);
    const traces: Data[] = data.map((v, i) => {return {
        y: v.flatMap(c => c),
        name: `commit ${i + 1}`,
        type: 'violin',
        hoverinfo: 'y'
    }});

    return(<div style={{marginTop: '2px'}}>
        <div className={'d-flex'}>
            <button onClick={() => setShow(!show)} className={'btn bg-indigo-500 px-1 text-white rounded mr-1'}>
                <i className={show ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill'} />
            </button>
            <b>{title}</b>
        </div>
        {show && <Plot
            style={{width: '100%'}}
            data={traces}
            layout={{autosize: true}}
            config={{displayModeBar: false}}
        />}
    </div>);
}
export {ViolinChart2};
