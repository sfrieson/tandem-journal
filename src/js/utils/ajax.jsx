/* global fetch Headers */

module.exports = {
  get: function (url) {
    console.log('get request to:', url);
  },
  post: function (url, data) {
    console.log(`POST request to: ${url} with data:`, data);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.text())
    .then(console.log.bind(console));
  }
};
