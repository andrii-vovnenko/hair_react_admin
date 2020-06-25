import React from "react";
import {connect} from "react-redux";
import get from 'lodash/get';
import pick from 'lodash/pick';
import {selectColors, selectCurrentModelColor, selectModelColors} from "../../../selectors";
import TableComponent from "../AllModelsPage/TableComponent";
import colorTypeIds from '../../../constants/hairColor/hairColorTypeNames';
import {withRouter} from "react-router";
import { INIT_CURRENT_MODELCOLOR } from '../../../constants/actionTypes';


const columnNamesMap = {
  colorName: 'колір',
  colorTypeId: 'відтінок',
  count: 'к-сть',
};
const mapper = {
  colorTypeId: (id) => colorTypeIds[id],
};

const AvailableColorsComponent = ({ modelColors, dispatch }) => {

  const onClick = (param) => dispatch({ type: INIT_CURRENT_MODELCOLOR, payload: param });

  return (
    <>
      <TableComponent
        columnNamesMap={columnNamesMap}
        mapper={mapper}
        models={modelColors}
        columnNameForLink={['modelColorId', 'modelId', 'colorId', 'count']}
        onClick={onClick}
      />
    </>
  )
};

const mapStateToProps = (state, { history }) => {
  const modelColors = selectModelColors(state);
  const colors = selectColors(state);
  modelColors
    .map((modelColor) => {
      const { colorId } = modelColor;
      const additionalFields = pick(get(colors, [colorId], {}), ['colorName', 'colorTypeId']);
      return Object.assign(modelColor, additionalFields);
    })
  return {
    modelColors,
    colors,
    history,
  }
};
export default withRouter(connect(mapStateToProps)(AvailableColorsComponent));
