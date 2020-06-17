import isEmpty from "lodash/isEmpty";
import {Button} from "react-bootstrap";
import React from "react";
import ImagesWrap from "./ImagesWrap";

const PreviewPhotosContainer = ({ filesToUpload, onClick }) => {
  if (isEmpty(filesToUpload)) return null;

  return (
    <>
      <h2>Фото для завантаження</h2>
      <ImagesWrap>
        {
          Object.values(filesToUpload).map(file => {
            const imagePath = URL.createObjectURL(file);
            return (
              <div key={file.name}>
                <img
                  src={imagePath}
                  width="180px"
                  height="180px"
                  alt='фото для загрузки'
                />
                <Button
                  variant='danger'
                  onClick={() => onClick(file.name)}
                >
                  delete
                </Button>
              </div>
            )
          })
        }
      </ImagesWrap>
    </>
  )
}

export default PreviewPhotosContainer;
