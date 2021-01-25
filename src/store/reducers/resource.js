import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../question-one/shared/utility'

const initialState = {
  resource: [],
}

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOAD_RESOURCE_SUSSCESS: return updateObject(state, {
      resource: action.resource
    })
    default:
      return state
  }
}

export default reducers;
