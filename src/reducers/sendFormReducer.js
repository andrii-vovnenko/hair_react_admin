import { SEND_FORM_FULFILLED, SEND_FORM_PENDING, SEND_FORM_REJECTED } from '../constants/actionTypes';

export default (state = {}, action) => {
  const { type } = action;
  if (type === SEND_FORM_FULFILLED) {
    console.log('SEND_FORM_FULFILLED', action.payload);
    return state;
  } else if (type === SEND_FORM_PENDING) {
    console.log('SEND_FORM_PENDING')
    return state;
  } else if (type === SEND_FORM_REJECTED) {
    console.log('SEND_FORM_REJECTED', action.payload);
    return state;
  }
  return state;
};
