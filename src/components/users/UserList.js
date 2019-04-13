import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, IconButton } from 'gestalt'

const propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func
}

export default function UserList ({ users, onDelete }) {
  return users && users.map(user => (
    <Container key={user.name}>
      <Box
        display="flex"
        direction="row"
        padding={2}
        width="100%"
        maxWidth={500}
        justifyContent="between">
        { user.name }
        {
          onDelete && (
            <IconButton
              type="button"
              icon="remove"
              iconColor="red"
              accessibilityLabel="Remove"
              onClick={() => onDelete(user.name)}
            />
          )
        }
      </Box>
    </Container>
  ))
}

UserList.propTypes = propTypes
