import {GenericProps} from '../common/types';
import {ViolinChart, ViolinChart2, ScatterPlot, StatisticsChart} from './';

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
            Parameters: {((params && params !== 'undefined') ? params : 'No Parameters').replace(/"/g, '').replace(',', ', ')}
        </b>
        <div className={'p-1'}>
            <b>All forks statistics</b>
            <ViolinChart2 data={data} title={`General Distribution`} />
            <StatisticsChart data={data} />
            <ScatterPlot iterations={iterations} forksNumber={forksNumber} data={data} />
            <b>Single forks statistics</b>
            {Object.entries(forks).map(([f, d]) =>
                <ViolinChart key={f} data={d} title={`FORK ${Number(f) + 1}`} />
            )}
        </div>

    </div>);
}

export {Parametrized};
