import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFailure, loadSuccess } from './actions';

export function* load() {
  try {
    const response: { data: any } = yield call(api.get, 'users/rlucilio/repos');

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
