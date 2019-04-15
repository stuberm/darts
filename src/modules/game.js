// Actions
export const RESET = 'darts/game/RESET'
export const START = 'darts/game/START'
export const ADD_PLAYER = 'darts/game/ADD_PLAYER'
export const REMOVE_PLAYER = 'darts/game/REMOVE_PLAYER'

const initialState = {
  type: null,
  isStarted: false,
  players: []
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case RESET: {
      return initialState
    }
    case START: {
      return {
        ...state,
        isStarted: true
      }
    }
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          action.user
        ]
      }
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(
          user => user.name !== action.user.name
        )
      }
    default:
      return state
  }
}

// Action creators

export const reset = () => ({
  type: RESET
})

export const start = () => ({
  type: START
})

export const addPlayer = (user) => ({
  type: ADD_PLAYER,
  user
})

export const removePlayer = (user) => ({
  type: REMOVE_PLAYER,
  user
})
