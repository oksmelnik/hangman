import { GUESS } from "../actions/types"


export default (state = [], { type, payload } ={}) => {
  switch (type) {
    case GUESS :

    if (payload.result == 0){
    return state.concat(payload.value)

  }
      default :
      return state
    }
    }
