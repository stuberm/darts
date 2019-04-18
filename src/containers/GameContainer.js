import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StartGame from './StartGame'
import Game from './Game'

const propTypes = {
  isStarted: PropTypes.bool
}

const GameContainer = ({ isStarted }) => {
  if (!isStarted) {
    return <StartGame />
  } else {
    return <Game />
  }
}

GameContainer.propTypes = propTypes

const mapStateToProps = (state) => ({
  ...state.game
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer)
