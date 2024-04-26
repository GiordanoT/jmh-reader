import {GenericProps} from '../common/types';
import {ViolinChart} from "./ViolinChart";

type Props = GenericProps & {params: string, data: number[][][]};
function Parametrized(props: Props) {
    const {params, data} = props;
    const forks: {[key:number]: number[][]} = {0: [], 1: []};
    for(const commit of data) {
        for(let fork = 0; fork < commit.length; fork++) {
            forks[fork].push(commit[fork]);
        }
    }

    return(<div className={'m-3'}>
        {Object.entries(forks).map(([f, d]) =>
            <ViolinChart key={f} title={`FORK ${Number(f) + 1} - Params: ${params}`} data={d} />
        )}
    </div>);
}

export {Parametrized};
