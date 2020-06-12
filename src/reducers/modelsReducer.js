import { GET_MODALS_FULFILLED, GET_MODALS_PENDING, GET_MODALS_REJECTED } from '../constants/actionTypes';

const initState = [];

export default (state = initState, action) => {
  const { type, payload } = action;
  if (type === GET_MODALS_FULFILLED) {
    return payload;
  }
  return state;
};
