import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers'

// No logger in production
const middleware = applyMiddleware(promise, thunk)

const store = process.env.NODE_ENV === 'production'
  ? createStore(reducer, middleware)
  : createStore(
    reducer,
    composeWithDevTools(middleware)
  )

export default store
