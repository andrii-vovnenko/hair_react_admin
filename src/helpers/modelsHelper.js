const { fetchData } = require('./fetchHelper');

export const getModels = () => fetchData({
  url: 'admin/getModels',
});

export const getModel = (params) => fetchData({
  url: 'admin/getModel',
  params,
});
