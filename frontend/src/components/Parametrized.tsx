import {GenericProps} from '../common/types';
import {ViolinChart, MeanChart, MedianChart, ModeChart, ScatterPlot} from './';

type Props = GenericProps & {iterations: number, forksNumber: number, params: string|undefined, data: number[][][]};
function Parametrized(props: Props) {
    const {iterations, forksNumber, params, data} = props;
    const forks: {[key:number]: number[][]} = {};
    for (let i = 0; i < forksNumber; i++) forks[i] = [];
    for(const commit of data) {
        for(let fork = 0; fork < commit.length; fork++) {
            forks[fork].push(commit[fork]);
        }
    }


    return(<div className={'m-2'}>
        <b className={'text-indigo-900'}>
            Parameters: {(params || 'No Parameters').replace(/"/g, '').replace(',', ', ')}
        </b>
        <MeanChart data={data} />
        <MedianChart data={data} />
        <ModeChart data={data} />
        {Object.entries(forks).map(([f, d]) =>
            <ViolinChart key={f} data={d} title={`FORK ${Number(f) + 1}`} />
        )}
        <ScatterPlot iterations={iterations} forksNumber={forksNumber} data={data} />
    </div>);
}

export {Parametrized};
