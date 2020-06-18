import get from 'lodash/get';
import keyBy from 'lodash/keyBy';
import sendForm from "../reducers/sendFormReducer";

export const selectHairColors = (state) => state.colors;
export const selectLoadState = (state) => state.loadState;
export const selectModels = (state) => state.models;
export const selectStatus = (state) => state.status;
export const selectParams = (match) => match.params;
export const selectModelIdFromParams = (state) => {
  const params = selectParams(state);
  return params.id;
};
export const selectCurrentModel = (state) => state.currentModel;
export const selectModelColors = (state) => {
  const model = selectCurrentModel(state);
  return get(model, 'colors', []);
};
export const selectColors = (state) => {
  const colors = get(state, ['entities', 'colors'], {});
  return keyBy(colors, 'colorId');
};
export const selectCurrentModelColor = (state) => state.currentModelColor;
const selectedModelName = (state) => selectCurrentModel(state).modelName;

export const selectedColorName = (state) => {
  const { colorId } = selectCurrentModelColor(state);
  const colors = selectColors(state);
  return get(colors, [colorId, 'colorName'], '');
};

export const selectUploadedPhotos = (state, modelColorId) => {
  return get(state, ['entities', 'photos', modelColorId], []);
};

export const selectSendingStatus = (state) => state.sendForm.sending;
