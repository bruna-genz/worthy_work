import {
  FETCH_DETAILS_SUCCEEDED,
  FETCH_DETAILS_FAILED,
} from '../constants/actionTypes';

const defaultState = {
  info: {},
  error: null,
};

const detailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_SUCCEEDED:
      return {
        ...state,
        details: action.payload,
      };
    case FETCH_DETAILS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailsReducer;
