import { SEND_FORM_FULFILLED, SEND_FORM_PENDING, SEND_FORM_REJECTED } from '../constants/actionTypes';

export default (state = {}, action) => {
  const { type } = action;
  if (type === SEND_FORM_FULFILLED) {
    return state;
  } else if (type === SEND_FORM_PENDING) {
    return state;
  } else if (type === SEND_FORM_REJECTED) {
    return state;
  }
  return state;
};
