import { takeLatest, put, all, call } from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils'
import ValuesActionTypes from './values.types';
import {
  fetchValuesSuccess,
  fetchValuesFailure
} from './values.actions'

import { collection, getDocs } from "firebase/firestore";


export function* fetchValuesAsync() {
  try {
    yield console.log('fetchValuesAsync running...')
    const ValuesRef = collection(firestore, 'values')
    const ValueSnap = yield getDocs(ValuesRef)
    const values = []
    ValueSnap.docs.map(pr => values.push(pr.data()))
    yield console.log('fetchValuesAsync Values...', values)
    yield put(fetchValuesSuccess(values));
  } catch (error) {
    yield put(fetchValuesFailure(error));
  }
}


export function* onFetchValue() {
  yield takeLatest(ValuesActionTypes.FETCH_VALUES_START, fetchValuesAsync);
}


export function* valuesSagas() {
  yield all([
    call(onFetchValue)
  ]);
}
