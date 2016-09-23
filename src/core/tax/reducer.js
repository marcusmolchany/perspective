import { TAX_CHANGE } from './action-types'

export default function (state = 0, action) {
  switch (action.type) {
    case TAX_CHANGE:
      return action.payload.tax
    default:
      return state
  }
}
