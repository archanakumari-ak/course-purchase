import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      {name: "Java", price:200},
      {name: "JavaScript", price:150},
      {name: "Photoshop", price:300},
      {name: "SM Marketing", price:250}
    ]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Course Purchase</h1>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
