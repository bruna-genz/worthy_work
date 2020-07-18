import {
  FETCH_JOBS_SUCCEEDED,
  FETCH_JOBS_FAILED,
} from '../constants/actionTypes';

const defaultState = {
  jobs: [],
  error: null,
};

const jobsReducer = (state = defaultState, action) => {
  switch (action.type) {
    // case FETCH_JOBS:
    //     return Object.assign({}, state, {
    //         fetching: true
    //     })
    case FETCH_JOBS_SUCCEEDED:
      return {
        ...state,
        jobs: action.payload,
      };
    case FETCH_JOBS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
