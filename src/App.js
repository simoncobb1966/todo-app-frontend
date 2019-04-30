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

  buttonHandler = (button, data) => {
    if (button === "clear") { this.clearList() }
    if (button === "done") { this.addDone(data) }
    if (button === "delete") { this.addDeleted(data) }
    if (button === "upButton") { this.moveTaskUp(button, data) }
    if (button === "downButton") { this.moveTaskDown(button, data) }
    if (button === "topButton") { this.addTask(button, data) }
    if (button === "endButton") { this.addTask(button, data) }
  }

  redisplayTasks = (currentTasks) => {
    this.setState({
      tasks: currentTasks
    })
  }

  clearList = () => {
    this.setState({
      qtyOfTasks: 0
    })
    let currentTasks = []
    this.redisplayTasks(currentTasks)
  }

  moveTaskUp = (id, i) => {
    let currentTasks = this.state.tasks
    if (i > 0) {
      for (let j = i - 1; j > -1; j--) {
        if (currentTasks[j].status !== "DELETED") {
          let temp = currentTasks[j]
          currentTasks[j] = currentTasks[i]
          currentTasks[i] = temp
          break
        }
      }
    }
    this.redisplayTasks(currentTasks)
  }

  moveTaskDown = (id, i) => {
    let currentTasks = this.state.tasks
    if (i < this.state.tasks.length - 1) {
      for (let j = i + 1; j < this.state.tasks.length; j++) {
        if (currentTasks[j].status !== "DELETED") {
          let temp = currentTasks[j]
          currentTasks[j] = currentTasks[i]
          currentTasks[i] = temp
          break
        }
      }
    }
    this.redisplayTasks(currentTasks)
  }

  addDone = (i) => {
    let currentTasks = this.state.tasks
    currentTasks[i].status = "DONE"
    this.qtyOfTasks()
    this.redisplayTasks(currentTasks)
  }

  addDeleted = (i) => {
    let currentTasks = this.state.tasks
    currentTasks[i].status = "DELETED"
    this.qtyOfTasks()
    this.redisplayTasks(currentTasks)
  }

  addTask = (id, taskDescription) => {
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
    this.qtyOfTasks()
    this.redisplayTasks(currentTasks)
  }

  qtyOfTasks = () => {
    let qtyTasks = 0
    this.state.tasks.forEach(function (item) {
      qtyTasks = qtyTasks + (item.status === "ACTIVE")
    })
    this.setState({
      qtyOfTasks: qtyTasks
    })

    return qtyTasks
  }

  render() {
    return (

      <div className="container mainstyle">
        <Header />

        <Entertodo
          buttonHandlerFunction={this.buttonHandler}
          numOfTasks={this.state.qtyOfTasks} />

        <div className="mainList">
          {
            this.state.tasks.map((item, i) => {
              return <Actualtodolist
                keyValue={i}
                taskDescription={item.taskText}
                taskStatus={item.status}
                buttonHandlerFunction={this.buttonHandler}
                numOfTasks={this.state.qtyOfTasks}
              />
            })
          }

          <Numberoftasks
            qtyOfTasksFunction={this.qtyOfTasks}
            numOfTasks={this.state.qtyOfTasks} />
        </div>

        <div className="clearButton">
          <Clearbutton
            buttonHandlerFunction={this.buttonHandler} />
        </div>

        <Footer />
      </div>

    );
  }
}

export default App;
