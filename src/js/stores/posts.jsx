import Ajax from '../utils/ajax.jsx';

module.exports = {
  create: function (data) {
    console.log('Creating a post with data:', data);
    Ajax.post('/create', data);
  }
};
