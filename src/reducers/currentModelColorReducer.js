import { INIT_CURRENT_MODELCOLOR } from "../constants/actionTypes";

export default (state = {}, action) => {
  const { type, payload } = action;
  if (type === INIT_CURRENT_MODELCOLOR) {
    return payload;
  }
  return state;
};
