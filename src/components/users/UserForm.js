import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Box, IconButton, Container, TextField } from 'gestalt'

const propTypes = {
  onSave: PropTypes.func.isRequired,
  users: PropTypes.array
}

export default function UserForm ({ onSave, users }) {
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  // Validate the entered name
  const validateName = () => {
    if (name.length === 0) {
      return "Name can't be blank"
    }
    if (users &&
        users.length > 0 &&
        users.filter(user => user.name === name).length > 0) {
      return 'Name is already existing'
    }
    return null
  }

  const submit = () => {
    const error = validateName()
    if (error) {
      setErrorMessage(error)
    } else {
      setName('')
      onSave(name)
    }
  }

  return (
    <Container>
      <Box
        display="flex"
        direction="row"
        padding={2}
        width="100%"
        maxWidth={500}
        alignContent="start"
        justifyContent="between">
        <Box width="100%" marginEnd={2}>
          <TextField
            id="Name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={({ value }) => {
              setErrorMessage(null)
              setName(value)
            }}
            errorMessage={errorMessage}
          />
        </Box>
        <Box alignContent="start">
          <IconButton
            type="button"
            icon="add"
            iconColor="white"
            accessibilityLabel="Add"
            onClick={() => submit()}
            inline
          />
        </Box>
      </Box>
    </Container>
  )
}

UserForm.propTypes = propTypes
