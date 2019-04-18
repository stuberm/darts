import React from 'react'
import PropTypes from 'prop-types'

const Players = ({ players, playerTurn }) => {
  return (
    <table>
      <tbody>
        <tr>
          {
            players.map((player, index) => (
              <td key={index} className={ index === playerTurn ? 'active' : null }>
                { `${player.name}${index === playerTurn ? '*' : ''}` }
              </td>
            ))
          }
        </tr>
        <tr>
          {
            players.map((player, index) => (
              <td key={index} className={ index === playerTurn ? 'active' : null }>
                { player.points }
              </td>
            ))
          }
        </tr>
      </tbody>
    </table>
  )
}

Players.propTypes = {
  players: PropTypes.array.isRequired,
  playerTurn: PropTypes.number.isRequired
}

export default Players
