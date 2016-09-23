import {combineReducers} from 'redux'
import items from './items'
import salary from './salary'

const rootReducer = combineReducers({
  items,
  salary
})

export default rootReducer
