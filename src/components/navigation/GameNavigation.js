import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Box, Button } from 'gestalt'
import { reset, nextGameTurn, nextPlayerTurn } from '../../modules/game'

const GameNavigation = ({ gameTurn, end, nextGameTurn, nextPlayerTurn }) => {
  return (
    <div className="top-navigation">
      <Container>
        <Box display="flex" justifyContent="between" alignItems="center">
          <Box>
            { `Round ${gameTurn + 1}` }
          </Box>
          <Box>
            <Button
              onClick={nextPlayerTurn}
              text="Next player"
              color="transparent"
              inline
            />
            <Button
              onClick={nextGameTurn}
              text="Next round"
              color="transparent"
              inline
            />
            <Button
              onClick={end}
              text="End"
              color="transparent"
              inline
            />
          </Box>
        </Box>
      </Container>
    </div>
  )
}

GameNavigation.propTypes = {
  gameTurn: PropTypes.number.isRequired,
  end: PropTypes.func.isRequired,
  nextGameTurn: PropTypes.func.isRequired,
  nextPlayerTurn: PropTypes.func.isRequired
}

export default connect(
  (store) => ({
    ...store.game
  }), {
    end: reset,
    nextGameTurn,
    nextPlayerTurn
  })(GameNavigation)
