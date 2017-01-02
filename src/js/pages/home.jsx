import React from 'react';
import Bicycle from '../components/bicycle.jsx';
import Posts from '../stores/posts.jsx';
import {Link} from 'react-router';
import mo from 'moment';

module.exports = class App extends React.Component {
  constructor () {
    super();
    this.state = {posts: false};
  }
  componentWillMount () {
    Posts.getAll()
    .then(posts => { console.log(posts); this.setState({posts: posts}); });
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
        {this.renderPosts()}
      </div>
    );
  }

  renderPosts () {
    if (!this.state.posts) return null;
    var posts = this.state.posts.map((post, i) => {
      return <li key={i}>{mo([post.year, post.month, post.day]).format('MMMM Do, YYYY')}: {post.name} - {post.body}</li>;
    });
    return (
      <ul style={{textAlign: 'left'}}>
        {posts}
      </ul>
    );
  }
};
