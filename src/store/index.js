import { createStore } from 'redux';
import rootReducer from '../reducers';

export const initialState = {
  data: {
    jobs: [],
    error: null,
  },
  filter: 'All',
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
