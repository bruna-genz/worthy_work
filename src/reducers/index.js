import { combineReducers } from 'redux';
import jobsReducer from './jobs';
import detailsReducer from './details';

const rootReducer = combineReducers({
  data: jobsReducer,
  details: detailsReducer,
});

export default rootReducer;
