import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
