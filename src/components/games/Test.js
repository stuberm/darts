import React from 'react'
import PropTypes from 'prop-types'
import Players from './Players'
import ScoreBoard from './ScoreBoard'
import { Container } from 'gestalt'

const propTypes = {
  players: PropTypes.array.isRequired,
  playerTurn: PropTypes.number.isRequired,
  score: PropTypes.func.isRequired
}

export default class Test extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }
  render () {
    const { players, playerTurn, score } = this.props
    return (
      <Container>
        <Players players={players} playerTurn={playerTurn} />
        <ScoreBoard score={score} />
      </Container>
    )
  }
}

Test.propTypes = propTypes
