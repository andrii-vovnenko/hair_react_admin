import { GET_MODALS } from '../constants/actionTypes';
import { getModels } from '../helpers/modelsHelper';

export const getModelsAction = () => ({
  type: GET_MODALS,
  payload: getModels(),
});
