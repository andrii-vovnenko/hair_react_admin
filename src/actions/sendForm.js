import { SEND_FORM } from '../constants/actionTypes';
import { fetchData, sendFormData } from '../helpers/fetchHelper';

const sendFrom = ({ actionTo, body }) => fetchData({
  url: `admin/${actionTo}`,
  body,
  method: 'post',
})

export const sendFormAction = ({ actionTo, body }) => ({
  type: SEND_FORM,
  payload: sendFrom({ actionTo, body }),
})

const sendFormWithPhotos = ({ filesToUpload, currentModelColor }) => {
  const formData = new FormData();
  Object.values(filesToUpload).forEach(file => {
    formData.append('files', file);
  })
  formData.append('additionalData', JSON.stringify(currentModelColor));
  return sendFormData({ formData, url: 'admin/images/upload' });
};

export const sendPhotosAction = ({ filesToUpload, currentModelColor }) => ({
  type: SEND_FORM,
  payload: sendFormWithPhotos({ filesToUpload, currentModelColor }),
})
