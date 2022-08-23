import { put, call, select } from 'redux-saga/effects';
import ProfileActions from '../Redux/SampleRedux';

export function* cekDataProf(api) {
    try {
        var response = yield call(api.getCoffe);
        const { ok, data, status } = response;
    } catch (error) {
        throw error
    }
}

