import { GET_MODALS, GET_MODEL } from '../constants/actionTypes';
import { getModels, getModel } from '../helpers/modelsHelper';

export const getModelsAction = () => ({
  type: GET_MODALS,
  payload: getModels(),
});

export const getModelAction = (params) => ({
  type: GET_MODEL,
  payload: getModel(params),
})
