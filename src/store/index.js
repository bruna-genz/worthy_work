import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {
  data: {
    jobs: [],
    error: null,
  },
  // filter: '',
  details: {
    info: {},
    error: null,
  },
};

const store = createStore(
  rootReducer,
  initialState,
);

export default store;
