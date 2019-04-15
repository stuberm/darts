import React from 'react'
import PropTypes from 'prop-types'
import { Container, Heading } from 'gestalt'
import UserList from '../shared/UserList'

const propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func
}

export default function SelectPlayers ({
  selectedPlayers,
  users,
  onAdd,
  onRemove
}) {
  return (
    <Container>
      <Heading color="white">
        Add players
      </Heading>
      <UserList
        users={users}
        icon="add"
        iconColor="white"
        accessibilityLabel="Select"
        onClick={(user) => onAdd(user)}
      />
      <Heading color="white">
        Selected players
      </Heading>
      <UserList
        users={selectedPlayers}
        icon="remove"
        iconColor="red"
        accessibilityLabel="Remove"
        onClick={(user) => onRemove(user)}
      />
    </Container>
  )
}

SelectPlayers.propTypes = propTypes
