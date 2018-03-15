import { GUESS } from './types'


export const makeGuess = (value, result) => {

return {
  type: GUESS,
  payload: {
    value, result
  }
}
}
