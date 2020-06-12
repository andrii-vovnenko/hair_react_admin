import { GET_MODEL_FULFILLED, GET_COLORS_REJECTED } from "../constants/actionTypes";

export default (state = {}, action) => {
  const { type, payload } = action;
  if (type === GET_MODEL_FULFILLED) {
    const { model } = payload;
    return model;
  }
  return state;
}
