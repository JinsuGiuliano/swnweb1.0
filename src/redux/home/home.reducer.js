import HomeActionTypes from "./home.types";
const INITIAL_STATE = {
  data: [],
  message:'',
  onEdit:false
};

export const homeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HomeActionTypes.FETCH_HOME_SUCCESS:
      return {
        ...state,
        data: payload
      }
    case HomeActionTypes.UPDATE_HOME_FAILURE:
    case HomeActionTypes.FETCH_HOME_FAILURE:
      return {
        ...state,
        message: payload
      }
    case HomeActionTypes.UPDATE_HOME_SUCCESS:
        return {
          ...state,
          data: payload,
          message:'Home page Updated Successfully!'
        }
    case HomeActionTypes.CHANGE_EDIT_MODE:
      return {
        ...state,
        onEdit:payload
      }
    default:
      return state;
  }
};
