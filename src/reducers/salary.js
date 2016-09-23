import { SALARY_CHANGE } from '../actions/salary'

export default function (state = 0, action) {
  switch (action.type) {
    case SALARY_CHANGE:
      return action.payload.salary
    default:
      return state
  }
}
