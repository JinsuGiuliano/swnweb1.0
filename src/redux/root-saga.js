import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { projectsSagas } from './project/project.sagas';
import { valuesSagas } from './values/values.sagas';
import { homeSagas } from './home/home.sagas'
export function* rootSaga() {
  yield all([ 
    call(userSagas), 
    call(projectsSagas),
    call(valuesSagas),
    call(homeSagas)
  ]);
}
