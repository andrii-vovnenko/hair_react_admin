import React, {useEffect, useState} from "react";
import  {connect } from "react-redux";
import {selectCurrentModel, selectLoadState, selectModelIdFromParams} from "../../../selectors";
import { getModelAction } from '../../../actions/modelsActions';
import {LOAD_STATE, LOAD_STATE_FULFILLED} from "../../../constants/actionTypes";
import SpinnerComponent from "../../Spinner";
import CreateModelPage from "../CreateModelPage/CreateModelPage";
import AvailableColorsComponent from "./AvailableColorsComponent";
import {Col, Row, Button} from "react-bootstrap";
import CreateModelColorComponent from "./CreateModelColorComponent";
import CreateColorModal from "../CreateColorModal/CreateColorModal";
import UploadedPhotos from "./UploadedPhotos";

const ModelPage = ({ modelId, dispatch, model, load }) => {
  const [showModal, setShowModal] = useState(false);

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
      <Row>
        <Col md={6}>
          <AvailableColorsComponent />
        </Col>
        <Col md={6}>
          <CreateModelColorComponent />
          <CreateColorModal
            isShowModal={showModal}
            closeModal={() => setShowModal(false)}
          />
          <Button
            size='sm'
            variant='outline-success'
            onClick={() => setShowModal(true)}
            className='ml-2'
          >
            додати колір
          </Button>
        </Col>
      </Row>
      <UploadedPhotos />
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
