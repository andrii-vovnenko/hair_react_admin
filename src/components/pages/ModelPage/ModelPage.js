import React, {useEffect} from "react";
import  {connect } from "react-redux";
import {selectCurrentModel, selectLoadState, selectModelIdFromParams} from "../../../selectors";
import { getModelAction } from '../../../actions/modelsActions';
import {LOAD_STATE, LOAD_STATE_FULFILLED} from "../../../constants/actionTypes";
import SpinnerComponent from "../../Spinner";
import CreateModelPage from "../CreateModelPage/CreateModelPage";

const ModelPage = ({ modelId, dispatch, model, load }) => {

  useEffect(() => {
    dispatch({ type: LOAD_STATE })
    dispatch(getModelAction({ modelId })).then(() => dispatch({ type: LOAD_STATE_FULFILLED }));
  }, []);

  if (load) return <SpinnerComponent />

  return (
    <>
      <CreateModelPage
        dispatch={dispatch}
        model={model}
        modelId={modelId}
        submitButtonText='Обновить'
        load={load}
        withRefresh
      />
    </>
  )
};

const mapStateToProps = (state, { match }) => {
  return {
    load: selectLoadState(state),
    modelId: selectModelIdFromParams(match),
    model: selectCurrentModel(state),
  }
};

export default connect(mapStateToProps)(ModelPage);
