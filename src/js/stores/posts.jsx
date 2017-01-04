import Ajax from '../utils/ajax.jsx';
var url = '/api/posts';
module.exports = {
  getAll: () => {
    return Ajax.get(url);
  },
  getRecent: () => {
    return Ajax.get(url + '/recent');
  },
  getPastYears: () => {
    return Ajax.get(url + '/past-years');
  },
  create: data => {
    console.log('Creating a post with data:', data);
    return Ajax.post(url, data);
  }
};
