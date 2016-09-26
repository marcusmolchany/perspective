import * as actions from './actions'
import * as actionTypes from './action-types'

describe('salary actions', () => {
  it('should create an action to change the salary', () => {
    const salary = 12345
    const payload = {
      salary
    }
    const expectedAction = {
      type: actionTypes.SALARY_CHANGE,
      payload
    }

    expect(actions.changeSalary(salary)).toEqual(expectedAction)
  })
})
