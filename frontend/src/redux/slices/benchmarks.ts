import {createSlice} from '@reduxjs/toolkit';

export const benchmarksSlice = createSlice({
    name: 'benchmarks',
    initialState: [],
    reducers: {
        setBenchmarks(state, action) {
            return action.payload;
        },
        resetBenchmarks() {
            return [];
        }
    }
});

export const {setBenchmarks, resetBenchmarks} = benchmarksSlice.actions;
