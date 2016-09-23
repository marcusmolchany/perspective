import { combineReducers } from 'redux'

import { itemsReducer } from './items'
import { salaryReducer } from './salary'
import { taxReducer } from './tax'

export default combineReducers({
  items: itemsReducer,
  salary: salaryReducer,
  tax: taxReducer
})
