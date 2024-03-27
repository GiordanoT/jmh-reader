import {createSlice} from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    name: 'page',
    initialState: {path: 'dashboard'},
    reducers: {
        toDashboard() {
            return {path: 'dashboard'};
        },
        toBenchmark(state, action) {
            return {path: 'benchmark', id: action.payload};
        }
    }
});

export const {toDashboard, toBenchmark} = pageSlice.actions;
