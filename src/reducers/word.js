import { GUESS } from "../actions/types"
const orig = [ "h","e","l","l","o" ]
const wordState = orig.map(x => {return "_"})

export default (state = wordState, { type, payload } ={}) => {
switch (type) {
  case GUESS :
    if (payload.result > 0)
    {return state.map((y, index) => {
      if (index == orig.indexOf(payload.value)) {
        return payload.value}
        else
        return y
      })
}

else
return state

  default :
  return state
}
}
