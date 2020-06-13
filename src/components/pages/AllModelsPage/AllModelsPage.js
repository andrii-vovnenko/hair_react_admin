import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getModelsAction } from '../../../actions/modelsActions';
import {selectLoadState, selectModels} from '../../../selectors/index';
import SpinnerComponent from "../../Spinner";
import { LOAD_STATE, LOAD_STATE_FULFILLED } from '../../../constants/actionTypes';
import TableComponent from "./TableComponent";
import materialNames from "../../../constants/material/materialNames";
import producerNames from "../../../constants/producer/producerNames";
import typeNames from "../../../constants/hairTypes/hairTypeNames";

const mapper = {
  materialId: (id) => materialNames[id],
  producer: (id) => producerNames[id],
  typeId: (id) => typeNames[id],
};
const columnNamesMap = {
  modelName: 'модель',
  materialId: 'матеріал',
  price: 'ціна',
  producer: 'виробник',
  typeId: 'тип',
};
const buildModelPageUrl = (modelId) => `/models/${modelId}`;


const AllModelsPage = ({ dispatch, load, models }) => {
  useEffect(() => {
    dispatch({type: LOAD_STATE})
    dispatch(getModelsAction()).then(() => dispatch({type: LOAD_STATE_FULFILLED}));
  }, [])

  if (load) return <SpinnerComponent />

  return (
    <TableComponent
      mapper={mapper}
      columnNamesMap={columnNamesMap}
      buildModelPageUrl={buildModelPageUrl}
      columnNameForLink='modelId'
      models={models}
    />
  )
};

const mapStateToProps = (state) => {
  return {
    load: selectLoadState(state),
    models: selectModels(state),
  };
};

export default connect(mapStateToProps)(AllModelsPage);
