import { createSlice } from '@reduxjs/toolkit';
import {
    FilterState,
    SET_FILTER_FIELD,
    SET_FILTER_CONTENT
} from './types';

const initialState: FilterState = {
    field: 'created_at',
    content: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterField(state: FilterState, action: SET_FILTER_FIELD) {
            state.field = action.payload;
        },
        setFilterContent(state: FilterState, action: SET_FILTER_CONTENT) { 
            state.content = action.payload;
        }
    }
});

export const { setFilterField, setFilterContent } = filterSlice.actions;
export default filterSlice.reducer;