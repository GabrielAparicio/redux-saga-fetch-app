import { createSelector } from '@reduxjs/toolkit';
import _ from 'lodash';

import { RootState } from './store';

const users = (state: RootState) => state.usersSlice.users;
const isLoading = (state: RootState) => state.usersSlice.isLoading;
const error = (state: RootState) => state.usersSlice.error;
const sortingField = (state: RootState) => state.sortingSlice.field;
const sortingType = (state: RootState) => state.sortingSlice.type;
const filterField = (state: RootState) => state.filterSlice.field;
const filterContent = (state: RootState) => state.filterSlice.content;

export const usersSelector = createSelector(
    [users, sortingField, sortingType, filterField, filterContent],
    (users, sortingField, sortingType, filterField, filterContent) => {
        const filteredUsers = filterContent ? (
            users.filter((user) => user[filterField].toLowerCase().includes(filterContent) )
        ) : users;
        return _.orderBy(filteredUsers, [sortingField], [sortingType]);
    }
);

export const isLoadingSelector = createSelector(
    [isLoading],
    (isLoading) => isLoading
);

export const errorSelector = createSelector(
    [error],
    (error) => error
);