import * as actions from './actions'
import * as actionTypes from './action-types'

describe('tax actions', () => {
  it('should create an action to change the tax', () => {
    const tax = 0.33
    const payload = {
      tax
    }
    const expectedAction = {
      type: actionTypes.TAX_CHANGE,
      payload
    }

    expect(actions.changeTax(tax)).toEqual(expectedAction)
  })
})
