import { SALARY_CHANGE } from './action-types'

/**
 * change salary action creator
 * @param  {Number} salary The user's salary
 * @return {Object}        redux action
 */
export function changeSalary (salary) {
  return {
    type: SALARY_CHANGE,
    payload: {
      salary
    }
  }
}
