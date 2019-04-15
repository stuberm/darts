import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addPlayer, removePlayer, start } from '../modules/game'
import SelectPlayers from '../components/startGame/SelectPlayers'

class Users extends PureComponent {
  render () {
    const { users, game, addPlayer, removePlayer } = this.props
    return (
      <div>
        <SelectPlayers
          selectedPlayers={game.players}
          onAdd={addPlayer}
          onRemove={(user) => removePlayer(user)}
          users={users}
        />
        {/* <UserList users={users} onDelete={deleteUser} /> */}
      </div>
    )
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
