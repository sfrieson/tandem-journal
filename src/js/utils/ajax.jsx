/* global fetch Headers */

module.exports = {
  get: function (url) {
    console.log('get request to:', url);
    return fetch(url)
    .then(res => res.json())
    .then(res => JSON.parse(res));
  },
  post: function (url, data) {
    console.log(`POST request to: ${url} with data:`, data);
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(res => JSON.parse(res));
  }
};
