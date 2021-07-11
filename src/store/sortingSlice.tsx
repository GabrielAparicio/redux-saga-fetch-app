import { createSlice } from '@reduxjs/toolkit';
import {
    SortingState,
    SET_SORTING_FIELD,
    SET_SORTING_TYPE
 } from './types';

const initialState: SortingState= {
    field: 'created_at',
    type: 'desc'
};

const sortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        setSortingField(state: SortingState, action: SET_SORTING_FIELD) {
            state.field = action.payload;
        },
        setSortingType(state: SortingState, action: SET_SORTING_TYPE) { 
            state.type = action.payload;
        }
    }
});

export const { setSortingField, setSortingType } = sortingSlice.actions;
export default sortingSlice.reducer;