import { combineReducers } from 'redux';
import jobsReducer from './jobs';
import detailsReducer from './details';
import filterReducer from './filter';

const rootReducer = combineReducers({
  data: jobsReducer,
  filter: filterReducer,
  details: detailsReducer,
});

export default rootReducer;
