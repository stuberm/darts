import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import sample from './sampleReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  sample
})
