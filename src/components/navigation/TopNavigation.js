import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'gestalt'

export default function TopNavigation (props) {
  return (
    <div className="top-navigation">
      <Container>
        <NavLink exact to="/" >Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </Container>
    </div>
  )
}
