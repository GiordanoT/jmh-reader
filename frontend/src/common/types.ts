import {ReactNode} from 'react';

export type GenericProps = {
    key?: string,
    children?: ReactNode,
    className?: string
};
export type Response = {
    code: number,
    data: unknown
}
export type Commit = {
    id: string,
    comment: string,
    benchmark: string,
    mode: string,
    threads: number,
    iterations: number,
    forks: number,
    jdk: string,
    params: unknown,
    data: number[][]
};
export type Page = {
    path: string,
    id: string|undefined
};
export type State = {
    commits: Commit[],
    benchmarks: string[],
    page: Page
};
