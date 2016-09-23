import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

/**
 * configure the redux store with initial state and middleware
 * @param  {Object} initialState the initial redux application state
 * @return {Object}              redux store
 */
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f  // redux dev tools extension
  ))

  return store
}
