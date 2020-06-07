const { fetchData } = require('./fetchHelper');

export const getColors = async () => fetchData({ url: 'admin/getColors' })

export const addColor = async ({ colorTypeId, colorName }) => fetchData({
  url: 'admin/addColor',
  method: 'post',
  body: { colorTypeId, colorName }
});
