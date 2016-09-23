export const SALARY_CHANGE = 'salary/salary_change'

export function changeSalary (salary) {
  return {
    type: SALARY_CHANGE,
    payload: {
      salary
    }
  }
}
