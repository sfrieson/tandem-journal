import React from 'react';
import Posts from '../stores/posts.jsx';

class Post extends React.Component {
  constructor (props) {
    super(props);
    this.state = {results: {}};
    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  render () {
    return (
      <div className='page'>
        <h1>Daily Post</h1>
        <a href='/#/'>
          <button>
            Home
          </button>
        </a>
        <form onSubmit={this.submit}>
          <fieldset>
            Who is posting?<br />
            <input onChange={this.inputChange} type='radio' name='user' value='1' /> Amy<br />
            <input onChange={this.inputChange} type='radio' name='user' value='2' /> Steven<br />
          </fieldset>
          <br />
          Summarize today...<br />
          <textArea name='post' style={{width: '100%'}} rows={5} onChange={this.inputChange} value={this.state.results.post} /><br />
          <input type='submit' />
        </form>
      </div>
    );
  }

  inputChange (e) {
    this.state.results[e.target.name] = e.target.value;
    this.setState({results: this.state.results});
  }

  submit (e) {
    e.preventDefault();
    Posts.create(this.state.results)
    .then(res => {
      this.state.results.post = '';
      this.setState({results: this.state.results});
    });
  }
}

module.exports = Post;
