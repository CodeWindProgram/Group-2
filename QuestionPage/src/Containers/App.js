import React, { Component } from 'react';
import './App.css';
import Quiz from '../Components/Quiz/Question';

class App extends Component {



  render() {
    return (
      <div className="App">
        <div>

            <Quiz />
        </div>
      </div>
    );
  }
}

export default App;
