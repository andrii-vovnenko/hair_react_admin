import React from "react";
import {connect} from "react-redux";
import get from 'lodash/get';
import pick from 'lodash/pick';
import {selectColors, selectModelColors} from "../../../selectors";
import TableComponent from "../AllModelsPage/TableComponent";
import colorTypeIds from '../../../constants/hairColor/hairColorTypeNames';

const columnNamesMap = {
  colorName: 'колір',
  colorTypeId: 'відтінок',
  count: 'к-сть',
};
const mapper = {
  colorTypeId: (id) => colorTypeIds[id],
};
const buildModelPhotosPageUrl = (modelColorId) => `/models/photos/${modelColorId}`;

const AvailableColorsComponent = ({ modelColors, colors }) => {
  return (
    <>
      <TableComponent
        columnNamesMap={columnNamesMap}
        mapper={mapper}
        models={modelColors}
        columnNameForLink='modelColorId'
        buildModelPageUrl={buildModelPhotosPageUrl}
      />
    </>
  )
};

const mapStateToProps = (state) => {
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
  }
};
export default connect(mapStateToProps)(AvailableColorsComponent);
