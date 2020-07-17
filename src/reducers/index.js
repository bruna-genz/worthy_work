import { combineReducers } from 'redux';
import jobsReducer from './jobs';

const rootReducer = combineReducers({
  jobs: jobsReducer
});


console.log(rootReducer)

export default rootReducer;