import * as Types from '../constants/actionTypes'

export default (users = [], action) => {
  switch (action.type) {
    case Types.ADD_USER:
      return [
        ...users,
        {
          name: action.name
        }
      ]
    case Types.DELETE_USER:
      return users.filter(user => user.name !== action.name)
    default:
      return users
  }
}
