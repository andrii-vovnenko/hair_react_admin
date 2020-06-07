const { baseUrl } = require('../constants');

/**
 *
 * @param url {string}
 * @param method {string}
 * @param body {Object}
 */
export const fetchData = async ({
  url, method = 'get', body = undefined,
}) => {
  const res = await fetch(`${baseUrl}${url}`, {
    method,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (res.status !== 200) {
    return res;
  }
  return await res.json();
};
