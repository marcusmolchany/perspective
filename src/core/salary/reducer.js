import { SALARY_CHANGE } from './action-types'

/**
 * salary reducer
 * @param  {Number} state  the current user's salary
 * @param  {Object} action redux action
 * @return {Number}        the user's updated salary
 */
export default function (state = 0, action) {
  switch (action.type) {
    case SALARY_CHANGE:
      return action.payload.salary
    default:
      return state
  }
}
