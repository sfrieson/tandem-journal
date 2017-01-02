import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from './components/app.jsx';
import Post from './components/post.jsx';

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
