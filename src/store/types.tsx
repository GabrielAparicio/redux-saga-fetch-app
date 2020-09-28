export interface User {
    id: string;
    created_at: string;
    updated_at: string;
    email: string;
    name: string;
    cached_avatar: string;
    agent: string;
    style: string;
    stats: object;
}

export interface UserState {
    users: User[];
    isLoading: boolean;
    error: null | string;
}

export interface SET_USER {
    type: string;
    payload: User[] ;
}

export interface SET_LOADING {
    type: string;
    payload: boolean;
}

export interface SET_ERROR {
    type: string;
    payload: null | string;
}

export interface SortingState {
    field: string;
    type: string;
}

export interface SET_SORTING_FIELD {
    type: string;
    payload: string;
}

export interface SET_SORTING_TYPE {
    type: string;
    payload: string;
}

export interface FilterState {
    field: string;
    content: string;
}

export interface SET_FILTER_FIELD {
    type: string;
    payload: string;
}

export interface SET_FILTER_CONTENT {
    type: string;
    payload: string;
}

export interface FETCH_USERS {
    type: string;
}