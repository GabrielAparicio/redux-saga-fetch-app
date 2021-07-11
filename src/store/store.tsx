import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';
import sortingSlice from './sortingSlice';
import filterSlice from './filterSlice';
import createSagaMiddleware from 'redux-saga';
import fetchUsersSaga from './fetchUsersSaga';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    usersSlice, 
    sortingSlice,
    filterSlice
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(fetchUsersSaga);

export type RootState = ReturnType<typeof rootReducer>;
export default store;