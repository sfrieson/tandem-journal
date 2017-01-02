import Ajax from '../utils/ajax.jsx';

module.exports = {
  getAll: () => {
    return Ajax.get('/posts');
  },
  create: data => {
    console.log('Creating a post with data:', data);
    return Ajax.post('/create', data);
  }
};
