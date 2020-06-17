const { baseUrl } = require('../constants');

/**
 *
 * @param url {string}
 * @param method {string}
 * @param body {Object}
 * @param params {Object}
 */
export const fetchData = async ({
  url, method = 'get', body = undefined, params = undefined,
}) => {
  let query = `${baseUrl}${url}`;

  if (params) {
    query += `?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}`;
  }

  const res = await fetch(query, {
    method,
    headers: {
      'content-type': 'application/json',
    },
    body: body && JSON.stringify(body),
  });
  if (res.status !== 200) {
    return res;
  }
  return await res.json();
};

export const sendFormData = async ({ formData, url }) => {
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'post',
    body: formData,
  });

  if (res.status !== 200) {
    return res;
  }
  return await res.json();
};
