import { createSlice } from '@reduxjs/toolkit';
import { 
    UserState, 
    SET_USER,
    SET_LOADING,
    SET_ERROR
} 
from './types';


const initialState: UserState = {
    users: [],
    isLoading: true,
    error: null
};

const usersSlice = createSlice({
    name: 'users',
    initialState, 
    reducers: {
        setUsers(state: UserState, action: SET_USER) {
            state.users = action.payload;            
        },
        setLoading(state: UserState, action: SET_LOADING) {
            state.isLoading = action.payload;
        },
        setError(state: UserState, action: SET_ERROR) {
            state.error = action.payload;
        }
    }
});

export const { setUsers, setLoading, setError } = usersSlice.actions;
export default usersSlice.reducer;