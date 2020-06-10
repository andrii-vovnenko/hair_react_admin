import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getModelsAction } from '../../../actions/modelsActions';
import { selectLoadState } from '../../../selectors/index';
import SpinnerComponent from "../../Spinner";
import { LOAD_STATE, LOAD_STATE_FULFILLED } from '../../../constants/actionTypes';
import TableComponent from "./TableComponent";

const AllModelsPage = ({ dispatch, load, }) => {
  useEffect(() => {
    dispatch({type: LOAD_STATE})
    dispatch(getModelsAction()).then(() => dispatch({type: LOAD_STATE_FULFILLED}));
  }, [])

  if (load) return <SpinnerComponent />

  return (
    <TableComponent />
  )
};

const mapStateToProps = (state) => {
  return {
    load: selectLoadState(state),
  };
};

export default connect(mapStateToProps)(AllModelsPage);
