import { GET_STATISTICS_FULFILLED, GET_STATISTICS_PENDING, GET_STATISTICS_REJECTED } from '../constants/actionTypes';
import get from 'lodash/get';

const initState = {
  load: false,
};

export default (state = initState, action) => {
  const { type, payload } = action;
  const newStatistics = get(payload, ['newStatistics']);
  if (newStatistics) {
    return {
      load: false,
      sellStatistic: newStatistics,
    }
  }else if (type === GET_STATISTICS_FULFILLED)
    return {
      load: false,
      ...payload,
    }
  else if (type === GET_STATISTICS_PENDING)
    return {
      load: true,
    }
  else if (type === GET_STATISTICS_REJECTED)
    return {
      load: false,
      ...payload,
    }
  return state;
};
