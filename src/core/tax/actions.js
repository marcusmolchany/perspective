import { TAX_CHANGE } from './action-types'

export function changeTax (tax) {
  return {
    type: TAX_CHANGE,
    payload: {
      tax
    }
  }
}
