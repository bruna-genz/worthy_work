import { FETCH_JOBS_SUCCEEDED, FETCH_JOBS_FAILED } from '../constants/actionTypes';

// export const fetchJobs = payload => {
//   return {
//     type: FETCH_JOBS,
//     payload,
//   }
// }

export const fetchJobsSucceeded = payload => ({
  type: FETCH_JOBS_SUCCEEDED,
  payload,
});

export const fetchJobsFailed = payload => ({
  type: FETCH_JOBS_FAILED,
  payload,
});
