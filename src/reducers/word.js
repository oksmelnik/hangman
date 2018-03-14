import { GUESS } from "../actions/types"
const orig = [ "h","e","l","l","o" ]
const wordState = orig.map(x => {return "_"})

export default (state = wordState, { type, payload } ={}) => {
switch (type) {
  case GUESS :
const x = orig.indexOf(payload.value)
    if (x > 0)
    {return state.map((y, index) => {
  if (index == x) {return orig[x]}
  else
  return y
}) }

else
return state

  default :
  return state
}
}
