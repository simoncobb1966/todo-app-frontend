import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Entertodo from './components/entertodo';
import Actualtodolist from './components/actualtodolist'
import Bottom from './components/bottom'
import Numberoftasks from './components/Numberoftasks'


class App extends Component {



  render() {
    const tasks = [
      "Buy milk",
      "Buy bread",
      "Pickup Newspaper",
      "Walk the dog",
      "Do homework",
      "Buy lucky Aero",
      "Go to match"
    ]
    const headinginfo = "Todo App written in React";

    return (

      <div className="container mainstyle">
        <Header headingText={headinginfo} />

        <Entertodo />

        <div className="mainList">
          {
            tasks.map(function (item, index) {
              return <Actualtodolist taskDescription={item} key={index} />
            })
          }
          <Numberoftasks numberOfTasks={tasks.length} />
        </div>

        <Bottom />
      </div>
    );
  }
}

export default App;
