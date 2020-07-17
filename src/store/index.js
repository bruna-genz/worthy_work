import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {
    jobs: [],
    // filter: ''
}

const store = createStore(
    rootReducer,
    initialState,
);

console.log(store.getState())

export default store;