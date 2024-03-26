import {configureStore} from '@reduxjs/toolkit';
import {commitsSlice} from './slices/commits';

export const store = configureStore({
    reducer: {commits: commitsSlice.reducer}
});
