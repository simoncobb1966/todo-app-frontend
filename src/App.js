import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Entertodo from './components/entertodo';
import Actualtodolist from './components/actualtodolist'
import Footer from './components/footer'
import Numberoftasks from './components/Numberoftasks'


class App extends Component {

  state = {
    tasks: []
  }

  addTask = (taskDescription) => {
    let currentTasks = this.state.tasks
    currentTasks.push(taskDescription)
    this.setState({
      tasks: currentTasks
    })
  }

  render() {

    const headinginfo = "Todo App written in React";

    return (

      <div className="container mainstyle">
        <Header headingText={headinginfo} />

        <Entertodo addTaskFunction={this.addTask} />

        <div className="mainList">
          {
            this.state.tasks.map(function (item, index) {
              return <Actualtodolist taskDescription={item} key={index} />
            })
          }
          <Numberoftasks numberOfTasks={this.state.tasks.length} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
