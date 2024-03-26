import {createSlice} from '@reduxjs/toolkit';

export const commitsSlice = createSlice({
    name: 'commits',
    initialState: [],
    reducers: {
        setCommits(state, action) {
            return action.payload;
        },
        resetCommits() {
            return [];
        }
    }
});

export const {setCommits, resetCommits} = commitsSlice.actions;
