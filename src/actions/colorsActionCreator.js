import { GET_COLORS } from '../constants/actionTypes';
import { addColor, getColors } from '../helpers/colorFetchHelper';

export const addColorAction = ({ colorTypeId, colorName }) => ({
  type: GET_COLORS,
  payload: addColor({ colorTypeId, colorName }),
});

export const getColorsAction = () => ({
  type: GET_COLORS,
  payload: getColors(),
});
