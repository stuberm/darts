import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import users from './userReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  users
})
