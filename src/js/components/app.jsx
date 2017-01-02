import React from 'react';
import Bicycle from './bicycle.jsx';

module.exports = class App extends React.Component {
  render () {
    return (
      <div className='page'>
        <h1>Hello World!</h1>
        <p>
          I'm writing in ES6, and it's MERN! Finally! And on a new computer!!!
        </p>
        <Bicycle />
      </div>
    );
  }
};
