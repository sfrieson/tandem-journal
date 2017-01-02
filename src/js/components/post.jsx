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
        <form onSubmit={this.submit}>
          <h1>Evening Post</h1>
          <fieldset>
            Who is posting?<br />
            <input onChange={this.inputChange} type='radio' name='user' value='Amy' /> Amy<br />
            <input onChange={this.inputChange} type='radio' name='user' value='Steven' /> Steven<br />
          </fieldset>
          <br />
          <textArea name='post' onChange={this.inputChange} /><br />
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
    Posts.create(this.state.results);
  }
}

module.exports = Post;
