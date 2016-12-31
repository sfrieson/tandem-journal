import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>I'm writing in ES6, and it's MERN! Finally!</p>
      </div>
    );
  }
}

window.addEventListener('load', function () {
  ReactDOM.render(<App />, document.getElementById('app'));
});
