import React, { Component } from 'react'
import 'gestalt/dist/gestalt.css'
import '../styles/App.scss'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import createStore from '../store/'
import WebFont from 'webfontloader'

import TopNavigation from '../components/navigation/TopNavigation'
import Home from './Home'
import Users from './Users'

const { store, persistor, history } = createStore()

WebFont.load({
  google: {
    families: ['Raleway']
  }
})

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <TopNavigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users" component={Users} />
            </Switch>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
