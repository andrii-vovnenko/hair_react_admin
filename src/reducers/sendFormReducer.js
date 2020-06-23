import { SEND_FORM_FULFILLED, SEND_FORM_PENDING, SEND_FORM_REJECTED } from '../constants/actionTypes';

const initState = {
  sending: false,
}

export default (state = initState, action) => {
  const { type, payload } = action;
  if (type === SEND_FORM_FULFILLED) {
    return { sending: false };
  } else if (type === SEND_FORM_PENDING) {
    return { sending: true };
  } else if (type === SEND_FORM_REJECTED) {
    return { sending: false };
  }
  return state;
};
