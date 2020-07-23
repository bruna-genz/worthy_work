import {
  FETCH_JOBS_SUCCEEDED,
  FETCH_JOBS_FAILED,
  FETCH_DETAILS_SUCCEEDED,
  FETCH_DETAILS_FAILED,
  CHANGE_FILTER,
} from '../constants/actionTypes';

export const fetchJobsSucceeded = books => ({
  type: FETCH_JOBS_SUCCEEDED,
  payload: books,
});

export const fetchJobsFailed = error => ({
  type: FETCH_JOBS_FAILED,
  payload: error,
});

export const fetchDetailsSucceeded = books => ({
  type: FETCH_DETAILS_SUCCEEDED,
  payload: books,
});

export const fetchDetailsFailed = error => ({
  type: FETCH_DETAILS_FAILED,
  payload: error,
});

export const filterCreator = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});
