import ValuesActionTypes from './values.types'  

//////////////////
// FETCH VALUES
export const fetchValueStart = () => ({
  type: ValuesActionTypes.FETCH_VALUES_START
});
export const fetchValuesSuccess = VALUES => ({
  type: ValuesActionTypes.FETCH_VALUES_SUCCESS,
  payload: VALUES
});
export const fetchValuesFailure = error => ({
  type: ValuesActionTypes.FETCH_VALUES_FAILURE,
  payload: error
});

//////////////////
// CREATE PROJECT
export const createValuesStart = project => ({
    type: ValuesActionTypes.DELETE_PROJECT_START,
    payload: project
  });
  export const createValuesSuccess = VALUES => ({
    type: ValuesActionTypes.DELETE_PROJECT_SUCCESS,
    payload: VALUES
  });
  export const createValuesFailure = error => ({
    type: ValuesActionTypes.FETCH_VALUES_FAILURE,
    payload: error
  });

//////////////////
// UPDATE VALUES
export const updateValuesStart = (oldProject, newProject) => ({
  type: ValuesActionTypes.UPDATE_PROJECT_START,
  payload: {oldProject, newProject}
});
export const updateValuesSuccess = VALUES => ({
  type: ValuesActionTypes.UPDATE_PROJECT_SUCCESS,
  payload: VALUES
});
export const updateValuesFailure = error => ({
  type: ValuesActionTypes.UPDATE_PROJECT_FAILURE,
  payload: error
});

//////////////////
// DELETE VALUES
export const deleteValuesStart = project => ({
    type: ValuesActionTypes.DELETE_PROJECT_START,
    payload: project
  });
  
  export const deleteValuesSuccess = VALUES => ({
    type: ValuesActionTypes.DELETE_PROJECT_SUCCESS,
    payload: VALUES
  });
  
  export const deleteValuesFailure = error => ({
    type: ValuesActionTypes.FETCH_VALUES_FAILURE,
    payload: error
  });