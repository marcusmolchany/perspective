import { SALARY_CHANGE } from './action-types'

export function changeSalary (salary) {
  return {
    type: SALARY_CHANGE,
    payload: {
      salary
    }
  }
}
