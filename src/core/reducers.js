import { combineReducers } from 'redux'

import { itemsReducer } from './items'
import { salaryReducer } from './salary'

export default combineReducers({
  items: itemsReducer,
  salary: salaryReducer
})
