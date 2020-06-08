const { fetchData } = require('./fetchHelper');

export const getModels = () => fetchData({
  url: 'admin/getModels',
});
