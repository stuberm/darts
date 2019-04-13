import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addUser, deleteUser } from '../modules/users'
import UserList from '../components/users/UserList'
import UserForm from '../components/users/UserForm'

class Users extends PureComponent {
  render () {
    const { addUser, deleteUser, users } = this.props
    return (
      <div>
        <h1>Users</h1>
        <UserForm onSave={addUser} />
        <UserList users={users} onDelete={deleteUser} />
      </div>
    )
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  addUser: (name) => dispatch(addUser(name)),
  deleteUser: (name) => dispatch(deleteUser(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
