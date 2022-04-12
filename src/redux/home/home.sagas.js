import { takeLatest, put, all, call } from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils'
import HomeActionTypes from './home.types';
import {
  fetchHomeSuccess,
  fetchHomeFailure
} from './home.actions'

import { getDoc, doc } from "firebase/firestore";


export function* fetchHomeAsync() {
  try {
    yield console.log('fetchHomeAsync running...')
    const HomeRef = doc(firestore, 'data', 'data')
    const HomeSnap = yield getDoc(HomeRef)
    const Home = HomeSnap.data()
    yield console.log('fetchHomeAsync Home...', Home)
    yield put(fetchHomeSuccess(Home));
  } catch (error) {
    yield put(fetchHomeFailure(error));
  }
}


export function* onFetchHome() {
  yield takeLatest(HomeActionTypes.FETCH_HOME_START, fetchHomeAsync);
}


export function* homeSagas() {
  yield all([
    call(onFetchHome)
  ]);
}
