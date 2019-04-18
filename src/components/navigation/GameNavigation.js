import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Box, Button } from 'gestalt'
import { reset, nextGameTurn, nextPlayerTurn } from '../../modules/game'

const GameNavigation = ({ end, nextGameTurn, nextPlayerTurn }) => {
  return (
    <div className="top-navigation">
      <Container>
        <Box display="flex" justifyContent="end" alignItems="center">
          <Button
            onClick={nextPlayerTurn}
            text="Next player"
            color="transparent"
            inline
          />
          <Button
            onClick={nextGameTurn}
            text="Next turn"
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
      </Container>
    </div>
  )
}

GameNavigation.propTypes = {
  end: PropTypes.func.isRequired,
  nextGameTurn: PropTypes.func.isRequired,
  nextPlayerTurn: PropTypes.func.isRequired
}

export default connect(() => ({}), {
  end: reset,
  nextGameTurn,
  nextPlayerTurn
})(GameNavigation)
