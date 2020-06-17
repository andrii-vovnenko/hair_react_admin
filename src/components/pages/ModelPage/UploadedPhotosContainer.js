import React from "react";
import {baseUrl} from "../../../constants";
import ImagesWrap from "./ImagesWrap";
import {Button} from "react-bootstrap";
import isEmpty from "lodash/isEmpty";

const buildUrlToImage = (imageName) => `${baseUrl}images/${imageName}`;

const UploadedPhotosContainer = ({ uploadedPhotos, title, onClick }) => {

  if (isEmpty(uploadedPhotos)) return null;

  return (
    <>
      <h2>{title}</h2>
      <ImagesWrap>
        {uploadedPhotos
          .map(({photo320x240, photoId}) =>
            <div key={photoId}>
              <img
                width='180px'
                height='180px'
                src={buildUrlToImage(photo320x240)}
                key={photo320x240}
              />
              <Button
                variant='danger'
                onClick={() => onClick(photoId)}
                >
                delete
            </Button>
            </div>
            )}
      </ImagesWrap>
    </>
  )
};

export default UploadedPhotosContainer;
