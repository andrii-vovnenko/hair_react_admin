import { GET_STATISTICS } from "../constants/actionTypes";
import { fetchData } from '../helpers/fetchHelper';

const fetchStatistics = () => fetchData({ url: 'admin/sellStatistic' });

export const getStatisticsAction = () => ({
  type: GET_STATISTICS,
  payload: fetchStatistics(),
});
