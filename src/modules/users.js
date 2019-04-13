// Actions
export const ADD = 'darts/users/ADD'
export const DELETE = 'darts/users/DELETE'

// Reducer
export default (users = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...users,
        {
          name: action.name
        }
      ]
    case DELETE:
      return users.filter(user => user.name !== action.name)
    default:
      return users
  }
}

// Action creators
export const addUser = name => ({
  type: ADD,
  name
})

export const deleteUser = name => ({
  type: DELETE,
  name
})
