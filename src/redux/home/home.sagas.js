import { takeLatest, put, all, call } from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils'
import HomeActionTypes from './home.types';
import {
  fetchHomeSuccess,
  fetchHomeFailure,
  updateHomeSuccess,
  updateHomeFailure
} from './home.actions'

import { getDoc, doc, updateDoc } from "firebase/firestore";


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

export function* updateHomeAsync({payload:newState}) {
  try {
    yield console.log('updateHomeAsync running...')
    const HomeRef = doc(firestore, 'data', 'data')
    const HomeSnap = yield updateDoc(HomeRef,newState)
    yield console.log('updateHomeAsync Home...', HomeSnap)
    yield put(updateHomeSuccess(newState));
  } catch (error) {
    yield put(updateHomeFailure(error));
  }
}

export function* onFetchHome() {
  yield takeLatest(HomeActionTypes.FETCH_HOME_START, fetchHomeAsync);
}

export function* onUpdateHome() {
  yield takeLatest(HomeActionTypes.UPDATE_HOME_START, updateHomeAsync);
}

export function* homeSagas() {
  yield all([
    call(onFetchHome),
    call(onUpdateHome)
  ]);
}
