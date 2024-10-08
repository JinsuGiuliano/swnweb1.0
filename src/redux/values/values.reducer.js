import ValuesActionTypes from "./values.types";
const INITIAL_STATE = {
  values: [],
  balance: [],
  message:''
};

export const valuesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ValuesActionTypes.FETCH_VALUES_SUCCESS:
      return {
        ...state,
        values: payload
      }
    case ValuesActionTypes.FETCH_BALANCE_SUCCESS:
      return {
        ...state,
        balance: payload
      }
    case ValuesActionTypes.CREATE_VALUES_FAILURE:
    case ValuesActionTypes.DELETE_VALUES_FAILURE:
    case ValuesActionTypes.UPDATE_VALUES_FAILURE:
    case ValuesActionTypes.FETCH_VALUES_FAILURE:
    case ValuesActionTypes.FETCH_BALANCE_FAILURE:
      return {
        ...state,
        message: payload
      }
    case ValuesActionTypes.CREATE_VALUES_SUCCESS:
    case ValuesActionTypes.DELETE_VALUES_SUCCESS:
    case ValuesActionTypes.UPDATE_VALUES_SUCCESS:
    default:
      return state;
  }
};
