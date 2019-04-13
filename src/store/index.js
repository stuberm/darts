import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import createRootReducer from './reducers'

const history = createBrowserHistory()
const rootReducer = createRootReducer(history)

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
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
    persistedReducer, // root reducer with router state
    compose(
      middleware,
      ...enhancers
    )
  )

  const persistor = persistStore(store)

  return {
    history,
    store,
    persistor
  }
}
