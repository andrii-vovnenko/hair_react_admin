import get from 'lodash/get';

export const selectStatistics = (state) => state.statistics;
export const selectSellStatistics = (state) => get(selectStatistics(state), 'sellStatistic', []);
export const selectStatisticsLoad = (state) => selectStatistics(state).load;
