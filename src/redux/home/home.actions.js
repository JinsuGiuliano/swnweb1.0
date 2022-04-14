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
export const updateHomeStart = newState => ({
  type: HomeActionTypes.UPDATE_HOME_START,
  payload: newState
});
export const updateHomeSuccess = newState => ({
  type: HomeActionTypes.UPDATE_HOME_SUCCESS,
  payload: newState
});
export const updateHomeFailure = error => ({
  type: HomeActionTypes.UPDATE_HOME_FAILURE,
  payload: error
});

//////////////////
// EDIT MODE
export const changeEditMode = mode => ({
  type: HomeActionTypes.CHANGE_EDIT_MODE,
  payload: mode
});
