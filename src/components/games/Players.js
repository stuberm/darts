import React from 'react'
import PropTypes from 'prop-types'
import points from '../../constants/score'

const Players = ({ players, playerTurn }) => {
  return (
    <table className="players">
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
                {
                  // Calculate points from scores
                  // payer.score = [
                  //  [T20,T20,T20], - 180
                  //  [DB,M,M] - 50
                  // ]
                  player.scores.reduce((previousValue, currentValue) => (
                    previousValue + currentValue.reduce((previousScore, currentScore) => (
                      previousScore + points[currentScore]
                    ), 0)
                  ), 0)
                }
              </td>
            ))
          }
        </tr>
        <tr>
          {
            players.map((player, index) => (
              <td key={index} className={ index === playerTurn ? 'active' : null }>
                <ul className="player-scores">
                  {
                    player.scores.map((score, index) => (
                      <li key={index}>{ score.join(', ') }</li>
                    ))}
                </ul>
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
