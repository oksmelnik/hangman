import { GUESS } from './types'

export const guess = (value) => {

return {
  type: GUESS,
  payload: {
    value
  }
}
}
