import { takeLatest, put, all, call } from 'redux-saga/effects';
import { firestore } from '../../firebase/firebase.utils'
import ProjectsActionTypes from './project.types';
import {
  fetchProjectsSuccess,
  fetchProjectsFailure,
  updateProjectSuccess,
  updateProjectFailure,
  deleteProjectSuccess,
  deleteProjectFailure,
  // createProjectSuccess,
  // createProjectFailure
} from './project.actions'

import { doc, updateDoc, getDoc, deleteDoc, setDoc } from "firebase/firestore";


export function* fetchProjectAsync() {
  try {
    yield console.log('fetchProjectAsync running...')
    const projectsRef = doc(firestore, 'data', 'projects')
    const projectSnap = yield getDoc(projectsRef)
    const data = projectSnap.data().projects
    yield console.log('fetchProjectAsync projects...', data)
    yield put(fetchProjectsSuccess(data));
  } catch (error) {
    yield put(fetchProjectsFailure(error));
  }
}

export function* UpdateProjectAsync({payload:projects}) {
  try {
    yield console.log('UpdateProjectAsync running...')
    const projectRef = doc(firestore, 'data', 'projects')
    yield updateDoc(projectRef, {projects})
    yield put(updateProjectSuccess(projects));
  } catch (error) {
    yield put(updateProjectFailure(error));
  }
}

export function* deleteProjectAsync({payload:{project, projects}}) {
  try {
    yield console.log('deleteProjectAsync running...')
    const OldprojectRef = doc(firestore, 'data', 'projects')
    yield deleteDoc(OldprojectRef)
    const projectRef = doc(firestore, 'data', 'projects')
    yield setDoc(projectRef, {projects})
    const projectsFiltered = projects.filter(el => el.id !== project.id);
    yield put(deleteProjectSuccess(projectsFiltered));
  } catch (error) {
    yield put(deleteProjectFailure(error));
  }
}

// export function* createProjectAsync({payload:project}) {
//   try {
//     yield console.log('createProjectAsync running...')
//     const projectRef = doc(firestore, 'projects', `${project.title}`)
//     yield setDoc( projectRef, { 
//                 ...project, 
//                 gallery: project.gallery.split(',') })
//     yield put(createProjectSuccess(project));
//   } catch (error) {
//     yield put(createProjectFailure(error));
//   }
// }


export function* onFetchProject() {
  yield takeLatest(ProjectsActionTypes.FETCH_PROJECTS_START, fetchProjectAsync);
}

export function* onUpdateProject() {
  yield takeLatest(ProjectsActionTypes.UPDATE_PROJECT_START, UpdateProjectAsync);
}

export function* onDeleteProject() {
  yield takeLatest(ProjectsActionTypes.DELETE_PROJECT_START, deleteProjectAsync);
}

// export function* onCreateProject() {
//   yield takeLatest(ProjectsActionTypes.CREATE_PROJECT_START, createProjectAsync);
// }


export function* projectsSagas() {
  yield all([
    call(onFetchProject),
    call(onUpdateProject),
    call(onDeleteProject),
  // call(onCreateProject)
  ]);
}
