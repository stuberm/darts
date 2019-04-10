import React, { Component } from 'react'
import '../styles/App.scss'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from '../store'

import Home from './Home'
import Users from './Users'

const store = configureStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
