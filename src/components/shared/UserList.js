import React from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton } from 'gestalt'

const propTypes = {
  users: PropTypes.array.isRequired,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  onClick: PropTypes.func
}

export default function UserList ({
  users,
  icon,
  iconColor,
  accessibilityLabel,
  onClick
}) {
  return users && users.map(user => (
    <Box
      key={user.name}
      display="flex"
      direction="row"
      padding={2}
      width="100%"
      maxWidth={500}
      justifyContent="between">
      { user.name }
      { icon && onClick && (
        <IconButton
          type="button"
          icon={icon}
          iconColor={iconColor}
          accessibilityLabel={accessibilityLabel}
          onClick={() => onClick(user)}
        />
      )
      }
    </Box>
  ))
}

UserList.propTypes = propTypes
