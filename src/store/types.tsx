export interface User {
    id: string;
    created_at: string;
    updated_at: string;
    email: string;
    name: string;
    cached_avatar: string;
    agent: string;
    style: string;
    stats: {
        invited_users_count: number | null;
        published_campaigns_count: number | null;
    };
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
    field: 'created_at' | 'updated_at' | 'name' | 'email';
    type: 'asc' | 'desc' | boolean;
}

export interface SET_SORTING_FIELD {
    type: string;
    payload: 'created_at' | 'updated_at' | 'name' | 'email';
}

export interface SET_SORTING_TYPE {
    type: string;
    payload: 'asc' | 'desc' | boolean;
}

export interface FilterState {
    field: 'name' | 'email';
    content: string;
}

export interface SET_FILTER_FIELD {
    type: string;
    payload: 'name' | 'email';
}

export interface SET_FILTER_CONTENT {
    type: string;
    payload: string;
}

export interface FETCH_USERS {
    type: string;
}