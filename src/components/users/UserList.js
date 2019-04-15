import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'gestalt'
import UserList from '../shared/UserList'

const propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func
}

export default function UserListWithDeleteButton ({ users, onDelete }) {
  return (
    <Container>
      <UserList
        users={users}
        icon="remove"
        iconColor="red"
        accessibilityLabel="Remove"
        onClick={(user) => onDelete(user.name)}
      />
    </Container>
  )
}

UserListWithDeleteButton.propTypes = propTypes
