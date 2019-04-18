import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Entertodo from './components/entertodo';
import Actualtodolist from './components/actualtodolist'
import Bottom from './components/bottom'

class App extends Component {


  render() {

    return (
      <div className="container mainstyle" >
        <div className="heading">
          <Header />
        </div>
        <div>
          <Entertodo />
        </div>
        <div>
          <Actualtodolist />
        </div>
        <div className="bottom">
          <Bottom />
        </div>
      </div>
    );
  }
}

export default App;
