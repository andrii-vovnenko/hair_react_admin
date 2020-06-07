import { GET_COLORS_FULFILLED } from '../constants/actionTypes';

const initState = []

export default (state = initState, action) => {
  const { type, payload } = action;
  if (type === GET_COLORS_FULFILLED) {
    return payload;
  }
  return state;
};
