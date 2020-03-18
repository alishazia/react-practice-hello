import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      age : 12,
      masi :true
    };
  }
 
  render() {

    const {name, age} = this.state
    return (
      <div>
        <Hello name2={name} age ={age} />
        <p>
          Start editing to see some {age} magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
