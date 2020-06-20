import { DYNAMIC_FORM_FULFILLED, DYNAMIC_FORM_PENDING, DYNAMIC_FORM_REJECTED } from '../constants/actionTypes';

const initState = {
  load: false,
}

export default (state = initState, action) => {
  const { type, payload } = action;
  if (type === DYNAMIC_FORM_FULFILLED) {
    return { ...payload, load: false };
  } else if (type === DYNAMIC_FORM_REJECTED) {
    return { ...state, load: false};
  } else if (type === DYNAMIC_FORM_PENDING) {
    return { load: true };
  }
  return state;
};
