import { combineReducers } from 'redux';
import jobsReducer from './jobs';

const rootReducer = combineReducers({
  data: jobsReducer,
});

export default rootReducer;
