import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import throttle from 'lodash.throttle'

import App from './views/containers/App'
import configureStore from './core/store'
import { loadState, saveState } from './core/localStorage'
import './index.css'

// localStorage is cool but kind of annoying during development... any thoughts here would be helpful
const persistedState = loadState()
const store = configureStore(persistedState)

// update the localStorage with the redux application state every time it changes
store.subscribe(throttle(() => saveState(store.getState())), 1000)

export default class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
