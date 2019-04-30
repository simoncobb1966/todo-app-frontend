import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Entertodo from './components/entertodo';
import Actualtodolist from './components/actualtodolist'
import Footer from './components/footer'
import Numberoftasks from './components/Numberoftasks'
import Clearbutton from './components/clearbutton'


class App extends Component {


  state = {
    tasks: [],
    qtyOfTasks: 0,
  }


  redisplayTasks = (currentTasks) => {
    this.setState({
      tasks: currentTasks
    })
  }

  clearList = () => {
    let currentTasks = []
    this.redisplayTasks(currentTasks)
  }

  moveTask = (id, i) => {
    let currentTasks = this.state.tasks
    if (id === "upButton" && i > 0) {
      let temp = currentTasks[i - 1]
      currentTasks[i - 1] = currentTasks[i]
      currentTasks[i] = temp
    }
    if (id === "downButton" && i < this.state.tasks.length - 1) {
      let temp = currentTasks[i + 1]
      currentTasks[i + 1] = currentTasks[i]
      currentTasks[i] = temp
    }
    this.redisplayTasks(currentTasks)
  }

  addDone = (i) => {
    let currentTasks = this.state.tasks
    currentTasks[i].status = "DONE"
    this.redisplayTasks(currentTasks)
  }

  addDeleted = (i) => {
    let currentTasks = this.state.tasks
    delete currentTasks[i]
    this.redisplayTasks(currentTasks)
  }

  addTask = (taskDescription, id) => {
    let currentTasks = this.state.tasks
    if (id === "topButton") {
      currentTasks.unshift({
        taskText: taskDescription,
        status: "ACTIVE"
      })
    }
    else {
      currentTasks.push({
        taskText: taskDescription,
        status: "ACTIVE"
      })
    }
    this.redisplayTasks(currentTasks)
  }

  qtyOfTasks = () => {
    let qtyTasks = 0
    this.state.tasks.forEach(function (item) {
      qtyTasks = qtyTasks + (item.taskText !== "")
    })
    return qtyTasks
  }

  render() {
    return (

      <div className="container mainstyle">
        <Header />

        <Entertodo
          addTaskFunction={this.addTask}
        />

        <div className="mainList">
          {
            this.state.tasks.map((item, i) => {
              return <Actualtodolist
                addDoneFunction={this.addDone}
                addDeletedFunction={this.addDeleted}
                keyValue={i}
                taskDescription={item.taskText}
                taskStatus={item.status}
                moveTaskFunction={this.moveTask}
              />
            })
          }

          <Numberoftasks
            qtyOfTasksFunction={this.qtyOfTasks}
          />
        </div>

        <div className="clearButton">
          <Clearbutton
            clearListFunction={this.clearList}
          />
        </div>
        <Footer />
      </div>


    );
  }
}

export default App;
