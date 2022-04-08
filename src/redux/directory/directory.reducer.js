import ProjectActionTypes from "./projects.types";
const INITIAL_STATE = {
  sections: [],
  message:''
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        sections: payload
      }
    case ProjectActionTypes.CREATE_PROJECT_FAILURE:
    case ProjectActionTypes.DELETE_PROJECT_FAILURE:
    case ProjectActionTypes.UPDATE_PROJECT_FAILURE:
    case ProjectActionTypes.FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        message: payload
      }
    case ProjectActionTypes.CREATE_PROJECT_SUCCESS:
    case ProjectActionTypes.DELETE_PROJECT_SUCCESS:
    case ProjectActionTypes.UPDATE_PROJECT_SUCCESS:
    default:
      return state;
  }
};
