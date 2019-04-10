import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func
}

export default function UserList ({ users, onDelete }) {
  return users && users.map(user => (
    <div key={user.name}>
      { user.name }
      {
        onDelete && (
          <button type="button" onClick={() => onDelete(user.name)}>
            x
          </button>
        )
      }
    </div>
  ))
}

UserList.propTypes = propTypes
