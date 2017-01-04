import React from 'react';
import Bicycle from '../components/bicycle.jsx';
import Posts from '../stores/posts.jsx';
import {Link} from 'react-router';
import mo from 'moment';

module.exports = class App extends React.Component {
  constructor () {
    super();
    this.state = {years: false};
  }
  componentWillMount () {
    Posts.getPastYears()
    .then(posts => ({years: posts}))
    .then(this.setState.bind(this));

    Posts.getRecent()
    .then(posts => ({recent: posts}))
    .then(this.setState.bind(this));
  }
  render () {
    return (
      <div className='page'>
        <h1>Tandem Journal</h1>
        <p>
          A cute new place to journal with your significant other.
        </p>
        <Bicycle />
        <h2>{mo().format('MMMM Do, YYYY')}</h2>
        <Link to='/post'>
          <button>
            Make new post
          </button>
        </Link>
        {this.renderPastYears()}
        {this.renderRecent()}
      </div>
    );
  }

  renderPastYears () {
    if (!this.state.years) return null;
    var posts = this.state.years.map((post, i) => {
      return <li key={i}>{mo([post.year, post.month, post.date]).format('MMMM Do, YYYY')}: {post.name} - {post.body}</li>;
    });
    return (
      <div>
        <h2>Past Years</h2>
        <ul style={{textAlign: 'left'}}>
          {posts}
        </ul>
      </div>
    );
  }
  renderRecent () {
    if (!this.state.recent) return null;
    var posts = this.state.recent.map((post, i) => {
      return <li key={i}>{mo([post.year, post.month, post.date]).format('MMMM Do, YYYY')}: {post.name} - {post.body}</li>;
    });
    return (
      <div>
        <h2>Past Weeks</h2>
        <ul style={{textAlign: 'left'}}>
          {posts}
        </ul>
      </div>
    );
  }
};
