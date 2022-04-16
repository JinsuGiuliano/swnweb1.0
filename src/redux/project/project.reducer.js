import ProjectActionTypes from "./project.types";
const INITIAL_STATE = {
  projects: [],
  message:''
};

export const projectReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ProjectActionTypes.CREATE_PROJECT_FAILURE:
    case ProjectActionTypes.DELETE_PROJECT_FAILURE:
    case ProjectActionTypes.UPDATE_PROJECT_FAILURE:
    case ProjectActionTypes.FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        message: payload
      }

    case ProjectActionTypes.CREATE_PROJECT_SUCCESS:
      state.projects.push(payload)
      return {
        ...state
      }
    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
    case ProjectActionTypes.UPDATE_PROJECT_SUCCESS:
    case ProjectActionTypes.DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: payload
      }
    default:
      return state;
  }
};
