import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getModelsAction } from '../../../actions/modelsActions';
import { selectLoadState, selectModels } from '../../../selectors/index';
import SpinnerComponent from "../../Spinner";
import { LOAD_STATE, LOAD_STATE_FULFILLED } from '../../../constants/actionTypes';

const AllModelsPage = ({ dispatch, models, load, }) => {
  useEffect(() => {
    if (!models || !models.length) {
      dispatch({type: LOAD_STATE})
      dispatch(getModelsAction()).then(() => dispatch({type: LOAD_STATE_FULFILLED}));
    }
  }, [])

  if (load) return <SpinnerComponent />

  return (
    <h1>All models page</h1>
  )
};

const mapStateToProps = (state) => {
  return {
    models: selectModels(state),
    load: selectLoadState(state),
  };
};

export default connect(mapStateToProps)(AllModelsPage);
