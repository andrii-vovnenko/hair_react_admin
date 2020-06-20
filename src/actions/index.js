import { LOAD_STATE, DYNAMIC_FORM } from "../constants/actionTypes";
import { fetchData } from '../helpers/fetchHelper';

export const loadAction = () => ({
  type: LOAD_STATE,
});

const fetchDynamicFormData = (params) => fetchData({ url: 'admin/getModels', params });

export const getDynamicFormData = (params) => ({
  type: DYNAMIC_FORM,
  payload: fetchDynamicFormData(params),
});
