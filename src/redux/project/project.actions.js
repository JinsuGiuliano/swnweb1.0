import ProjectActionTypes from './project.types'  

//////////////////
// FETCH PROJECTS
export const fetchProjectsStart = () => {
  console.log('fetchProjectsStart...')
  return({
  type: ProjectActionTypes.FETCH_PROJECTS_START
});}
export const fetchProjectsSuccess = projects => ({
  type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
  payload: projects
});
export const fetchProjectsFailure = error => ({
  type: ProjectActionTypes.FETCH_PROJECTS_FAILURE,
  payload: error
});

//////////////////
// CREATE PROJECT
export const createProjectStart = project => ({
    type: ProjectActionTypes.CREATE_PROJECT_START,
    payload: project
  });
  export const createProjectSuccess = projects => ({
    type: ProjectActionTypes.CREATE_PROJECT_SUCCESS,
    payload: projects
  });
  export const createProjectFailure = error => ({
    type: ProjectActionTypes.CREATE_PROJECT_FAILURE,
    payload: error
  });

//////////////////
// UPDATE PROJECTS
export const updateProjectStart = (project, projects) => ({
  type: ProjectActionTypes.UPDATE_PROJECT_START,
  payload: {project, projects}
});
export const updateProjectSuccess = projects => ({
  type: ProjectActionTypes.UPDATE_PROJECT_SUCCESS,
  payload: projects
});
export const updateProjectFailure = error => ({
  type: ProjectActionTypes.UPDATE_PROJECT_FAILURE,
  payload: error
});

//////////////////
// DELETE PROJECTS
export const deleteProjectStart =  (project, projects) => ({
    type: ProjectActionTypes.DELETE_PROJECT_START,
    payload: {project, projects}
  });
  
  export const deleteProjectSuccess = projects => ({
    type: ProjectActionTypes.DELETE_PROJECT_SUCCESS,
    payload: projects
  });
  
  export const deleteProjectFailure = error => ({
    type: ProjectActionTypes.FETCH_PROJECTS_FAILURE,
    payload: error
  });