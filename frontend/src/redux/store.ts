import {configureStore} from '@reduxjs/toolkit';
import {commitsSlice} from './slices/commits';
import {benchmarksSlice} from './slices/benchmarks';
import {pageSlice} from './slices/page';

export const store = configureStore({
    reducer: {
        commits: commitsSlice.reducer,
        benchmarks: benchmarksSlice.reducer,
        page: pageSlice.reducer
    }
});

// @ts-ignore
window.store = store; /* DEBUG */
