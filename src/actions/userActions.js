import * as Actions from '../constants/actionTypes'

export const addUser = name => {
  return {
    type: Actions.ADD_USER,
    name
  }
}
