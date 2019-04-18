import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GameNavigation from '../components/navigation/GameNavigation'
import * as Games from '../components/games'
import * as actions from '../modules/game'

const propTypes = {
  players: PropTypes.array.isRequired
}

class Game extends React.Component {
  render () {
    return ([
      <GameNavigation key="navigation" />,
      <Games.Test key="content" {...this.props}/>
    ])
  }
}

Game.propTypes = propTypes

const mapStateToProps = (store) => {
  const { game } = store
  return {
    ...game
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
