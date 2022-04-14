import { takeLatest, put, all, call } from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils'
import ProjectsActionTypes from './project.types';
import {
  fetchProjectsSuccess,
  fetchProjectsFailure
} from './project.actions'

import { getDoc, doc, collection, updateDoc, getDocs } from "firebase/firestore";


export function* fetchProjectAsync() {
  try {
    yield console.log('fetchProjectAsync running...')
    const projectsRef = collection(firestore, 'projects')
    const projectSnap = yield getDocs(projectsRef)
    const projects = []
    projectSnap.docs.map(pr => projects.push(pr.data()))
    yield console.log('fetchProjectAsync projects...', projects)
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield put(fetchProjectsFailure(error));
  }
}


export function* onFetchProject() {
  yield takeLatest(ProjectsActionTypes.FETCH_PROJECTS_START, fetchProjectAsync);
}


export function* projectsSagas() {
  yield all([
    call(onFetchProject)
  ]);
}
