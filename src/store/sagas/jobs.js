import { DataService } from '../../service/DataService'
import * as actionTypes from '../actions/actionTypes'
import { put, takeEvery, all, call, delay } from 'redux-saga/effects'
import * as jobActions from '../actions/jobs'
import * as resourceActions from '../actions/resource'

export function* fetchJobs({searchTerm}) {
  try {
    yield put(jobActions.loadJobsStart(true))
    if(!searchTerm) {
      yield put(jobActions.loadJobsSuccess([]))
      return
    }

    yield delay(500)
    const data = yield DataService.getJobsWithSearchTerm(searchTerm)
    yield put(jobActions.loadJobsSuccess(data))
    
  } catch(error) {
    yield put(jobActions.loadJobsError(true))
  }
}

export function* fetchResources({start, end}) {
  try {
    console.log('there')
    yield delay(500)
    const data = yield DataService.getJobsAndActivity()
    console.log('service', data.data)
    yield put(resourceActions.loadResources(data.data, start, end))

  } catch (error) {
    console.log(error)
  }
}

export function* loadJobs() {
  yield takeEvery(actionTypes.LOAD_JOBS, fetchJobs)
}

export function* loadResourcesTest() {
  yield takeEvery(actionTypes.LOAD_RESOURCE_REQUESTED, fetchResources)
}

export default function* skeduloSaga() {
  yield all([loadJobs(), loadResourcesTest()])
}