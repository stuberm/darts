import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addUser } from '../actions/userActions'

class Users extends PureComponent {
  render () {
    return (
      <div>
        <h1>Users</h1>
        <pre>
          {
            JSON.stringify(this.props.users, null)
          }
        </pre>
      </div>
    )
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  addUser: (name) => dispatch(addUser(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
