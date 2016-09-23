import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import throttle from 'lodash.throttle'

import App from './views/containers/App'
import configureStore from './core/store'
import { loadState, saveState } from './core/localStorage'
import './index.css'

const persistedState = loadState()
const store = configureStore(persistedState)

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
