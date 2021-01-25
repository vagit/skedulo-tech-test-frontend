import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../question-one/shared/utility'

const initialState = {
  error: null,
  errorMsg: null,
  jobs: [],
  loading: null
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_JOBS_START:
      return updateObject(state, {
        loading: action.loading
      })
    case actionTypes.LOAD_JOBS_SUCCESS:
      return updateObject(state, {
        jobs: action.jobs,
        loading: false,
        error: false,
        errorMsg: action.jobs.length > 0 ? "" : "No results found"
      })
    case actionTypes.LOAD_JOBS_ERROR:
      return updateObject(state, {
        error: action.error,
        errorMsg: "No results found",
      })
    case actionTypes.CLEAR_JOBS:
      return updateObject(state, {
        jobs: []
      })
    default:
      return state
  }
}

export default reducers
