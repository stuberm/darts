import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'gestalt'

import { addPlayer, removePlayer, start } from '../modules/game'
import TopNavigation from '../components/navigation/TopNavigation'
import SelectPlayers from '../components/startGame/SelectPlayers'
import StartButton from '../components/startGame/StartButton'

class Users extends PureComponent {
  render () {
    const { users, game, addPlayer, removePlayer, start } = this.props
    return ([
      <TopNavigation key="navigation" />,
      <Container key="content">
        <SelectPlayers
          selectedPlayers={game.players}
          onAdd={addPlayer}
          onRemove={(user) => removePlayer(user)}
          users={users}
        />
        <StartButton onClick={start} />
      </Container>
    ])
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  game: PropTypes.object.isRequired,
  addPlayer: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  users: state.users,
  game: state.game
})

const mapDispatchToProps = {
  addPlayer,
  removePlayer,
  start
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
