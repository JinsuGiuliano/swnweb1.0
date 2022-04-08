import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { projectsSagas } from './directory/projects.sagas';
import { valuesSagas } from './values/values.sagas';
export function* rootSaga() {
  yield all([ 
    call(userSagas), 
    call(projectsSagas),
    call(valuesSagas)
  ]);
}
