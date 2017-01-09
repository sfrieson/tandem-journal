import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Home from './pages/home.jsx';
import Post from './pages/post.jsx';

window.addEventListener('load', function () {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/post' component={Post} />
      </Router>
    ),
    document.getElementById('app')
  );
});
