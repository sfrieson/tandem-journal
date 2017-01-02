import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from './pages/home.jsx';
import Post from './pages/post.jsx';

window.addEventListener('load', function () {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/post' component={Post} />
      </Router>
    ),
    document.getElementById('app')
  );
});
