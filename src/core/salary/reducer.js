import { SALARY_CHANGE } from './action-types'

export default function (state = 0, action) {
  switch (action.type) {
    case SALARY_CHANGE:
      return action.payload.salary
    default:
      return state
  }
}
