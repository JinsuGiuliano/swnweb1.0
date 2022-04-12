import HomeActionTypes from './home.types'  

//////////////////
// FETCH Home
export const fetchHomeStart = () => ({
  type: HomeActionTypes.FETCH_HOME_START
});
export const fetchHomeSuccess = Home => ({
  type: HomeActionTypes.FETCH_HOME_SUCCESS,
  payload: Home
});
export const fetchHomeFailure = error => ({
  type: HomeActionTypes.FETCH_HOME_FAILURE,
  payload: error
});

//////////////////
// UPDATE Home
export const updateHomeStart = (oldProject, newProject) => ({
  type: HomeActionTypes.UPDATE_HOME_START,
  payload: {oldProject, newProject}
});
export const updateHomeSuccess = Home => ({
  type: HomeActionTypes.UPDATE_HOME_SUCCESS,
  payload: Home
});
export const updateHomeFailure = error => ({
  type: HomeActionTypes.UPDATE_HOME_FAILURE,
  payload: error
});


//////////////////
// UPDATE Home
export const changeEditMode = mode => ({
  type: HomeActionTypes.CHANGE_EDIT_MODE,
  payload: mode
});