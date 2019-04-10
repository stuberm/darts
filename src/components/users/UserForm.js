import React, { useState } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onSave: PropTypes.func.isRequired
}

export default function UserForm ({ onSave }) {
  const [name, setName] = useState('')
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="button"
        onClick={() => onSave(name)}
      >
          Save
      </button>
    </div>
  )
}

UserForm.propTypes = propTypes
