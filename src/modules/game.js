// Actions
const RESET = 'darts/game/RESET'
const ADD_PLAYER = 'darts/game/ADD_PLAYER'
const REMOVE_PLAYER = 'darts/game/REMOVE_PLAYER'
const START = 'darts/game/START'
const END = 'darts/game/END'
const NEXT_PLAYER_TURN = 'darts/game/NEXT_PLAYER_TURN'
const NEXT_GAME_TURN = 'darts/game/NEXT_GAME_TURN'
const SCORE = 'darts/game/SCORE'

const initialState = {
  type: null,
  isStarted: false,
  players: [],
  playerTurn: 0,
  gameTurn: 1
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case RESET: {
      return initialState
    }
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {
            ...action.user,
            points: 0,
            scores: []
          }
        ]
      }
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(
          user => user.name !== action.user.name
        )
      }
    case START: {
      return {
        ...state,
        isStarted: true
      }
    }
    case END: {
      return {
        ...state,
        isStarted: false
      }
    }
    case NEXT_PLAYER_TURN: {
      return {
        ...state,
        playerTurn: (state.playerTurn + 1) % state.players.length
      }
    }
    case NEXT_GAME_TURN: {
      return {
        ...state,
        gameTurn: (state.gameTurn + 1)
      }
    }
    case SCORE: {
      const { players, gameTurn, playerTurn } = state
      const playersCopy = [...players]
      const playerCopy = { ...playersCopy[playerTurn] }
      if (!playerCopy.scores[gameTurn]) {
        playerCopy.scores[gameTurn] = []
      }
      playerCopy.scores[gameTurn].push(action.points)
      playersCopy[playerTurn] = playerCopy
      return {
        ...state,
        players: [...playersCopy]
      }
    }
    default:
      return state
  }
}

// Action creators

export const reset = () => ({
  type: RESET
})

export const addPlayer = (user) => ({
  type: ADD_PLAYER,
  user
})

export const removePlayer = (user) => ({
  type: REMOVE_PLAYER,
  user
})

export const start = () => ({
  type: START
})

export const end = () => ({
  type: END
})

export const nextPlayerTurn = () => ({
  type: NEXT_PLAYER_TURN
})

export const nextGameTurn = () => ({
  type: NEXT_GAME_TURN
})

export const score = (points) => ({
  type: SCORE,
  points
})
