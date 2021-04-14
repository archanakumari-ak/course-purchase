import React, { Component } from "react";
import "./App.css";
import Coursesales from "./Coursesales";

interface course {
  name: string;
  price: number;
  active: boolean;
}

class App extends Component {
  render() {
    const courses: course[] = [
      { name: "Java", price: 200, active: false },
      { name: "JavaScript", price: 150, active: false },
      { name: "Photoshop", price: 300, active: false },
      { name: "SM Marketing", price: 250, active: false },
    ];
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to Course Purchase</h1>
        </header>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
