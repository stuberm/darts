import * as Actions from '../constants/actionTypes'

export const addUser = name => ({
  type: Actions.ADD_USER,
  name
})

export const deleteUser = name => ({
  type: Actions.DELETE_USER,
  name
})
