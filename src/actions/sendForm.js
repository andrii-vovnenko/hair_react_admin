import { SEND_FORM } from '../constants/actionTypes';
import { fetchData } from '../helpers/fetchHelper';

const sendFrom = ({ actionTo, body }) => fetchData({
  url: `admin/${actionTo}`,
  body,
  method: 'post',
})

export const sendFormAction = ({ actionTo, body }) => ({
  type: SEND_FORM,
  payload: sendFrom({ actionTo, body }),
})
