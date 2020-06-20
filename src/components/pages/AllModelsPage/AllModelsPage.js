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
import {withRouter} from "react-router";

const mapper = {
  materialId: (id) => materialNames[id],
  producer: (id) => producerNames[id],
  typeId: (id) => typeNames[id],
  count: (count) => count || 0,
};
const columnNamesMap = {
  modelName: 'модель',
  materialId: 'матеріал',
  price: 'ціна',
  producer: 'виробник',
  typeId: 'тип',
  count: 'к-сть',
};
const buildModelPageUrl = (param) => `/models/${param}`;

const AllModelsPage = ({ dispatch, load, models, history }) => {
  useEffect(() => {
    dispatch({type: LOAD_STATE})
    dispatch(getModelsAction()).then(() => dispatch({type: LOAD_STATE_FULFILLED}));
  }, [])

  if (load) return <SpinnerComponent />

  const onClick = ({ modelId }) => history.push(buildModelPageUrl(modelId))

  return (
    <TableComponent
      mapper={mapper}
      columnNamesMap={columnNamesMap}
      columnNameForLink={['modelId']}
      models={models}
      onClick={onClick}
    />
  )
};

const mapStateToProps = (state, { history }) => {
  return {
    load: selectLoadState(state),
    models: selectModels(state),
    history,
  };
};

export default withRouter(connect(mapStateToProps)(AllModelsPage));
