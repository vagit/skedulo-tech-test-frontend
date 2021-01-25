import * as actionTypes from './actionTypes'
export const loadJobs = (searchTerm) => ({
  type: actionTypes.LOAD_JOBS,
  searchTerm
})

export const loadJobsSuccess = (jobs) => ({
  type: actionTypes.LOAD_JOBS_SUCCESS,
  jobs
})

export const loadJobsError = (bool) => ({
  type: actionTypes.LOAD_JOBS_ERROR,
  error: bool
})

export const loadJobsStart = (bool) => ({
  type: actionTypes.LOAD_JOBS_START,
  loading: bool
})

export const clearJobList = () => ({
  type: actionTypes.CLEAR_JOBS
})
