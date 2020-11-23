import { all } from 'redux-saga/effects';
import { watchHistoryActions } from '../modules/History/saga';
import { watchAddressActions } from '../modules/Address/saga';

export default function* rootSaga() {
    yield all([
        watchHistoryActions(),
        watchAddressActions(),
    ]);
}
