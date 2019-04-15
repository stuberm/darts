import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import game from '../modules/game'
import users from '../modules/users'

export default (history) => combineReducers({
  router: connectRouter(history),
  game,
  users
})
