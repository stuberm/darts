import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Box, IconButton, Container, TextField } from 'gestalt'

const propTypes = {
  onSave: PropTypes.func.isRequired
}

export default function UserForm ({ onSave }) {
  const [name, setName] = useState('')
  return (
    <Container>
      <Box
        display="flex"
        direction="row"
        padding={2}
        width="100%"
        maxWidth={500}
        justifyContent="between">
        <Box width="100%" marginEnd={2}>
          <TextField
            id="Name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={({ value }) => setName(value)}
          />
        </Box>
        <IconButton
          type="button"
          icon="add"
          iconColor="white"
          accessibilityLabel="Add"
          onClick={() => {
            setName('')
            onSave(name)
          }
          }
          inline
        />
      </Box>
    </Container>
  )
}

UserForm.propTypes = propTypes
