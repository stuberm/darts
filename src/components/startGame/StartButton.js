import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from 'gestalt'

const propTypes = {
  onClick: PropTypes.func.isRequired
}

export default function StartButton ({ onClick }) {
  return (
    <Box marginTop={5}>
      <Button onClick={onClick} text="Start" />
    </Box>
  )
}

StartButton.propTypes = propTypes
