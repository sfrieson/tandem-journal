import React from 'react';
import Bicycle from '../components/bicycle.jsx';
import Posts from '../stores/posts.jsx';
import {Link} from 'react-router';

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
        <h1>Hello World!</h1>
        <p>
          I'm writing in ES6, and it's PERN! Finally! And on a new computer!!!
        </p>
        <Bicycle />
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
      let d = new Date(parseInt(post.created_at));
      return <li key={i}>{d.toDateString()}: {post.name} - {post.body}</li>;
    });
    return (
      <ul style={{textAlign: 'left'}}>
        {posts}
      </ul>
    );
  }
};
