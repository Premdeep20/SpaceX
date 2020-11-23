import { call, put, takeEvery } from 'redux-saga/effects';
import { getAddressSuccess, AddressActionTypes } from './action';
import { getAddress } from '../../api/repositories/addressRepository';

export function* getAddressJob() {

    const response = yield call(getAddress);
    if (response.data) {
        yield put(getAddressSuccess(response.data));
    } else {
        // yield put(addRequestFailedError(response));
    }
}

export function* watchAddressActions() {
    yield takeEvery(AddressActionTypes.GET_ADDRESS, getAddressJob);
}
