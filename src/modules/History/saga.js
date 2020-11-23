import { call, put, takeEvery } from 'redux-saga/effects';
import { getHistorySuccess, HistoryActionTypes } from './action';
import { getHistory } from '../../api/repositories/historyRepository';

export function* getHistoryJob() {

    const response = yield call(getHistory);
    if (response.data) {
        yield put(getHistorySuccess(response.data));
    } else {
        // yield put(addRequestFailedError(response));
    }
}

export function* watchHistoryActions() {
    yield takeEvery(HistoryActionTypes.GET_HISTORY, getHistoryJob);
}
