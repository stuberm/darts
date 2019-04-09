import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore (preloadedState) {
  const middleware = applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    promise,
    thunk
  )
  const enhancers = []
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      middleware,
      ...enhancers
    )
  )

  return store
}
