import deepFreeze from 'deep-freeze'

import salaryReducer, { initialState } from './reducer'
import * as actions from './actions'

describe('items reducer', () => {
  it('should provide the initial state', () => {
    expect(salaryReducer(undefined, {})).toEqual(initialState)
  })
})
