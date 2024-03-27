export type Commit = {
    id: string,
    comment: string,
    benchmark: string,
    mode: string,
    threads: number,
    iterations: number,
    forks: number,
    jdk: string,
    unit: string,
    score: number[],
    data: number[][][]
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
