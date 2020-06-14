import {Button, Col, Row, FormFile} from "react-bootstrap";
import React, {useState} from "react";
import FormComponent from "../../form/FormComponent";
import styled from "styled-components";
import {keyBy, omit} from "lodash";
import {baseUrl} from "../../../constants";

const Wrap = styled.div`
  border: 1px solid black;
  border-radius: 10px;
`;

const UploadedPhotos = ({ currentModelColor }) => {
  const [previewFiles, setPreviewFiles] = useState([]);
  const [filesToUpload, setFilesToUpload] = useState({});

  const addFile = async (e) => {
    const {files} = e.target;
    setFilesToUpload(Object.assign(keyBy(filesToUpload, 'name'), keyBy(files, 'name')));
  };
  const deleteUploadedPhoto = (fileName) => setFilesToUpload(omit(filesToUpload, fileName));
  const sendPhoto = async () => {
    const formData = new FormData();
    Object.values(filesToUpload).forEach(file => {
      formData.append('files', file);
    })
    formData.append('additionalData', JSON.stringify(currentModelColor));
    await fetch(`${baseUrl}admin/images/upload`, {
      method: 'post',
      body: formData,
    })
  }


  return (
    <Wrap>
      <FormComponent
        submit={() => sendPhoto()}
        elements={() => (<FormFile label='фото для завантаження' onChange={addFile} multiple/>)}
        submitBtnText='загрузить'
      />
      <Row>
        {
          Object.values(filesToUpload).map(file => {
            const imagePath = URL.createObjectURL(file);
            return (
              <Col xs={12} md={4} key={file.name}>
                <img
                  src={imagePath}
                  width="180px"
                  height="180px"
                  alt='фото для загрузки'
                />
                <Button
                  variant='danger'
                  onClick={() => deleteUploadedPhoto(file.name)}
                >
                  delete
                </Button>
              </Col>
            )
          })
        }
      </Row>
    </Wrap>
  )
};

export default UploadedPhotos;
