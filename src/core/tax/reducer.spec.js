import deepFreeze from 'deep-freeze'

import taxReducer from './reducer'
import * as actions from './actions'

describe('tax reducer', () => {
  it('should provide the initial state', () => {
    expect(taxReducer(undefined, {})).toEqual(0)
  })

  it('should handle TAX_CHANGE action', () => {
    const stateBefore = 0
    const action = actions.changeTax( 0.33)
    const stateAfter = 0.33

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(taxReducer(stateBefore, action)).toEqual(stateAfter)
  })
})
