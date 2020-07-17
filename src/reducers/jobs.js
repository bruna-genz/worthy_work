import { FETCH_JOBS_SUCCEEDED, 
    FETCH_JOBS_FAILED
} from '../constants/actionTypes';

const jobsReducer = (state = [], action) => {
    switch(action.type) {
        // case FETCH_JOBS:
        //     return Object.assign({}, state, {
        //         fetching: true
        //     })
        case FETCH_JOBS_SUCCEEDED:
            return Object.assign({}, state, {
                jobs: action.payload,
                fetching: false,
            })
        case FETCH_JOBS_FAILED:
            return Object.assign({}, state, {
                fetching: false,
                error: action.payload
            })
        default: 
            return state
    }
}

export default jobsReducer;