import { GET_COLORS, SEND_FORM } from '../constants/actionTypes';
import { addColor, getColors } from '../helpers/colorFetchHelper';

export const addColorAction = ({ colorTypeId, colorName }) => ({
  type: SEND_FORM,
  payload: addColor({ colorTypeId, colorName }),
});

export const getColorsAction = () => ({
  type: GET_COLORS,
  payload: getColors(),
});
