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
  createProjectSuccess,
  createProjectFailure
} from './project.actions'

import { setDoc, doc, collection, updateDoc, getDocs, deleteDoc } from "firebase/firestore";


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

export function* UpdateProjectAsync({payload:{project, projects}}) {
  try {
    yield console.log('UpdateProjectAsync running...')
    const projectRef = doc(firestore, 'projects', `${project.title}`)
    yield updateDoc(projectRef, project)
    const projectsNew = []
    projects.forEach(el => el.title === project.title? projectsNew.push(project): projectsNew.push(project))
    yield put(updateProjectSuccess(projectsNew));
  } catch (error) {
    yield put(updateProjectFailure(error));
  }
}

export function* deleteProjectAsync({payload:{project, projects}}) {
  try {
    yield console.log('deleteProjectAsync running...')
    const projectRef = doc(firestore, 'projects', `${project.title}`)
    yield deleteDoc(projectRef)
    const projectsNew = projects.filter(el => el.title !== project.title);
    yield put(deleteProjectSuccess(projectsNew));
  } catch (error) {
    yield put(deleteProjectFailure(error));
  }
}

export function* createProjectAsync({payload:project}) {
  try {
    yield console.log('createProjectAsync running...')
    const projectRef = doc(firestore, 'projects', `${project.title}`)
    yield setDoc( projectRef, { 
                ...project, 
                gallery: project.gallery.split(',') })
    yield put(createProjectSuccess(project));
  } catch (error) {
    yield put(createProjectFailure(error));
  }
}


export function* onFetchProject() {
  yield takeLatest(ProjectsActionTypes.FETCH_PROJECTS_START, fetchProjectAsync);
}

export function* onUpdateProject() {
  yield takeLatest(ProjectsActionTypes.UPDATE_PROJECT_START, UpdateProjectAsync);
}

export function* onDeleteProject() {
  yield takeLatest(ProjectsActionTypes.DELETE_PROJECT_START, deleteProjectAsync);
}

export function* onCreateProject() {
  yield takeLatest(ProjectsActionTypes.CREATE_PROJECT_START, createProjectAsync);
}


export function* projectsSagas() {
  yield all([
    call(onFetchProject),
    call(onUpdateProject),
    call(onDeleteProject),
    call(onCreateProject)
  ]);
}
