import {Col, Row, FormFile} from "react-bootstrap";
import React, {useState} from "react";
import FormComponent from "../../form/FormComponent";
import keyBy from "lodash/keyBy";
import omit from "lodash/omit";
import {
  selectCurrentModelColor, selectedColorName, selectUploadedPhotos,
} from "../../../selectors";
import {connect} from "react-redux";
import UploadedPhotosContainer from './UploadedPhotosContainer';
import PreviewPhotosContainer from "./PreviewPhotosContainer";
import { sendPhotosAction } from '../../../actions/sendForm';
import {sendFormAction} from "../../../actions/sendForm";

const UploadedPhotos = ({ currentModelColor, selectedColorName = '', uploadedPhotos, dispatch }) => {
  const [filesToUpload, setFilesToUpload] = useState({});

  const addPreviewPhoto = (e) => {
    const {files} = e.target;
    setFilesToUpload(Object.assign(keyBy(filesToUpload, 'name'), keyBy(files, 'name')));
  };
  const deletePreviewPhoto = (fileName) => setFilesToUpload(omit(filesToUpload, fileName));

  const deleteUploadedPhoto = (photoId) => {
    dispatch(sendFormAction({
      actionTo: 'images/delete',
      body: { photoId },
    }));
  };
  const sendPhoto = () => {
    dispatch(sendPhotosAction({ filesToUpload, currentModelColor }));
  }

  return (
    <>
      <Row>
        <Col xs={12} sm={4}>
          {selectedColorName && <FormComponent
            submit={() => sendPhoto()}
            elements={() => (
              <FormFile
                label={`фото для завантаження кольору ${selectedColorName}`}
                onChange={addPreviewPhoto}
                multiple
              />)}
            submitBtnText='загрузить'
          />}
        </Col>
        <Col xs={12} sm={8}>
          <UploadedPhotosContainer
            uploadedPhotos={uploadedPhotos}
            title='Загруженні фото'
            onClick={deleteUploadedPhoto}
          />
          <PreviewPhotosContainer
            onClick={deletePreviewPhoto}
            filesToUpload={filesToUpload}
          />
        </Col>
      </Row>
    </>
  )
};

const mapStateToProps = (state) => {
  const currentModelColor = selectCurrentModelColor(state);
  const { modelColorId } = currentModelColor;
  return {
    selectedColorName: selectedColorName(state),
    currentModelColor,
    uploadedPhotos: selectUploadedPhotos(state, modelColorId),
  }
};

export default connect(mapStateToProps)(UploadedPhotos);
