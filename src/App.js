import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Entertodo from './components/entertodo';
import Actualtodolist from './components/actualtodolist'
import Bottom from './components/bottom'


class App extends Component {



  render() {
    const tasks = [
      "Buy milk",
      "Buy bread",
      "Pickup Newspaper",
      "Walk the dog",
      "Do homework"
    ]
    const headinginfo = "Todo App written in React";

    return (

      <div className="container mainstyle">


        <Header headingText={headinginfo} />
        <Entertodo />

 
 {       
tasks.map(function(item, index) {
return  <Actualtodolist taskDescription={item} key={index} />
})
 }

        {/* <Actualtodolist /> */}
      

        <Bottom />
      </div>
    );
  }
}

export default App;
