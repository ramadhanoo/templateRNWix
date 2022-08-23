import { put, call, select } from 'redux-saga/effects';
import SampleActions from '../Redux/SampleRedux';

import ToastHandler from '../Components/ToastHandler/ToastHandler'

export function* getData(api) {
    try {
        yield put(SampleActions.setLoading({ loading: true, error: false }));
        var response = yield call(api.getCoffe);
        const { ok, data, status } = response;
        if (ok && status === 200) {
            yield put(SampleActions.succesFetch({ data: data }));
        } else {
            yield put(SampleActions.errorFetch({ message: "error" }))
        }
    } catch (error) {
        yield put(SampleActions.errorFetch({ message: "error" }));
    }
}

export function* cekData(api) {
    try {
        var response = yield call(api.getCoffe);
        const { ok, data, status } = response;
        ToastHandler.error("Warning", "Hahaha");
    } catch (error) {
        throw error
    }
}

