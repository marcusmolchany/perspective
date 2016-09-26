import deepFreeze from 'deep-freeze'

import salaryReducer from './reducer'
import * as actions from './actions'

describe('salary reducer', () => {
  it('should provide the initial state', () => {
    expect(salaryReducer(undefined, {})).toEqual(0)
  })

  it('should handle CHANGE_SALARY action', () => {
    const stateBefore = 0
    const action = actions.changeSalary(123)
    const stateAfter = 123

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(salaryReducer(stateBefore, action)).toEqual(stateAfter)
  })
})
