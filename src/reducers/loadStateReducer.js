import { LOAD_STATE, LOAD_STATE_FULFILLED } from '../constants/actionTypes';

export default (state = false, action) => {
  const { type } = action;
  if (type === LOAD_STATE) return true;
  if (type === LOAD_STATE_FULFILLED) return false;
  return state;
}
