import { call, put, takeLatest } from 'redux-saga/effects';
import { setUsers, setLoading, setError } from './usersSlice';
import { FETCH_USERS } from './types';

const apiUrl: string = 'http://localhost:3000/example_data.json';

function* fetchUsers(action: FETCH_USERS) {
   try {
        const response = yield call(fetchUsersHelper, apiUrl);
        yield put(setLoading(false));
        yield put(setUsers(response));
   } catch (error) {
        yield put(setLoading(false));
        yield put(setError(error));
   }
}

function* fetchUsersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

function fetchUsersHelper(url: string) {
    return fetch(url).then(response => response.json());
}

export default fetchUsersSaga;