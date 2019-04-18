import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addUser, deleteUser } from '../modules/users'
import UserList from '../components/users/UserList'
import UserForm from '../components/users/UserForm'
import TopNavigation from '../components/navigation/TopNavigation'

class Users extends PureComponent {
  render () {
    const { addUser, deleteUser, users } = this.props
    return ([
      <TopNavigation key="navigation" />,
      <UserForm key="form" users={users} onSave={addUser} />,
      <UserList key="list" users={users} onDelete={deleteUser} />
    ])
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
