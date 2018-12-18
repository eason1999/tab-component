import 'whatwg-fetch'

const config = require('../config')
/* eslint-disable max-len */
// const token = process.env.NODE_ENV === 'development' || process.env.API_ENV === 'test' ? '8323FF7635294FF59E430E8BE1C56EF2' : ''
const prefix = process.env.API_ENV === 'development' ? '/mock' : ''

function queryParams(params) {
  return Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')
}

export default (url = '', params = {}, fetchOpts = {}) => {
  const method = fetchOpts && fetchOpts.method && fetchOpts.method.toUpperCase()
  let newUrl = config.BASE_URL + prefix + url

  if (!method || method === 'GET' || method === 'DELETE') {
    newUrl += (newUrl.indexOf('?') === -1 ? '?' : '&') + queryParams(params)
  }
  if (method === 'POST' || method === 'PUT') {
    fetchOpts.body = queryParams(params)
  }
  const newFetchOpts = {
    ...fetchOpts,
    headers: {
      // Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  return fetch(newUrl, newFetchOpts)
    .then(res => res.json())
}
