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
    tasks: [],
    qtyOfTasks: 0
  }

  addDone = (kv) => {
    let currentTasks = this.state.tasks
    // alert (currentTasks[kv].status+" " + kv)
    currentTasks[kv].status = "DONE"

    this.setState({
      tasks: currentTasks
    })
  }

  addDeleted = (kv) => {
    let currentTasks = this.state.tasks
    delete currentTasks[kv]
    this.setState({
      tasks: currentTasks
    })
  }


  addTask = (taskDescription) => {
    let currentTasks = this.state.tasks
    currentTasks.push({
      taskText: taskDescription,
      status: "ACTIVE"
    })
    this.setState({
      tasks: currentTasks
    })
  }

  qtyOfTasks = () => {
    let qtyTasks = 0
    this.state.tasks.forEach(function (item) {
      qtyTasks = qtyTasks + (item.taskText !== "")
    })
    return qtyTasks
  }


  render() {

    const headinginfo = "Todo App written in React";
    const self = this

    return (

      <div className="container mainstyle">
        <Header headingText={headinginfo} />

        <Entertodo addTaskFunction={this.addTask} />

        <div className="mainList">

          {
            this.state.tasks.map(function (item, index) {
              return <Actualtodolist
                addDoneFunction={self.addDone}
                addDeletedFunction={self.addDeleted}
                keyValue={index} taskDescription={item.taskText} taskStatus={item.status} />
            })
          }

          <Numberoftasks qtyOfTasksFunction={self.qtyOfTasks} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
