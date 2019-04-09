import React, { Component } from 'react'
import logo from './logo.svg'
import './scss/App.scss'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'

const store = configureStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
              Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              Learn React
              </a>
            </header>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
