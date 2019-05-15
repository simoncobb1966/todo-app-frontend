import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Entertodo from './components/entertodo';
import Actualtodolist from './components/actualtodolist'
import Footer from './components/footer'
import Numberoftasks from './components/Numberoftasks'
import Clearbutton from './components/clearbutton'
import Sortbutton from './components/sortbutton'
import uuidv1 from 'uuid/v1'
import moment from 'moment'


class App extends Component {

  state = {
    tasks: [],
    qtyOfTasks: 0
  }

  buttonHandler = (button, data, date) => {
    // alert (button + "  " + data)
    if (button === "clear") { this.clearList() }
    if (button === "done") { this.Done(data) }
    if (button === "delete") { this.Deleted(data) }
    if (button === "upButton") { this.moveTaskUp(data) }
    if (button === "downButton") { this.moveTaskDown(data) }
    if (button === "topButton") { this.addTask(button, data, date) }
    if (button === "endButton") { this.addTask(button, data, date) }
    if (button === "sort") { this.sort() }
  }

  sort = () => {
    var copyState = this.state
    do {
      var switched = this.sortPass(copyState)
    }
    while (switched === 1)
    this.setState({
      copyState,
    })
  }

  sortPass = (copyState) => {
    var switcher = 0
    var i = 0
    do {
      // alert()
      if (moment(copyState.tasks[i].date).isBefore(moment(copyState.tasks[i + 1].date))) {
        switcher = 1
        var temp = copyState.tasks[i]
        var temp1 = copyState.tasks[i + 1]
        copyState.tasks[i] = temp1
        copyState.tasks[i + 1] = temp
      }
      i++
    }
    while (i < copyState.qtyOfTasks - 1)
    return (switcher)


  }



  clearList = () => {
    let currentTasks = []
    this.setState({
      tasks: currentTasks,
      qtyOfTasks: 0
    })
  }

  moveTaskUp = (id) => {
    var tTasks = this.state.tasks
    for (let i = 1; i < tTasks.length; i++) {
      if (id === tTasks[i].id) {
        let a = this.state.tasks[i]
        let b = this.state.tasks[i - 1]
        tTasks[i - 1] = a
        tTasks[i] = b
      }
    }
    this.setState({
      tasks: tTasks,
      qtyOfTasks: this.state.tasks.length
    })
  }

  moveTaskDown = (id) => {
    var tTasks = this.state.tasks
    for (let i = tTasks.length - 2; i > -1; i--) {
      if (id === tTasks[i].id) {
        let a = this.state.tasks[i]
        let b = this.state.tasks[i + 1]
        tTasks[i + 1] = a
        tTasks[i] = b
      }
    }
    this.setState({
      tasks: tTasks,
      qtyOfTasks: this.state.tasks.length
    })
  }

  Done = (id) => {
    var tempTasks = this.state.tasks.map((elem) => {
      if (elem.id === id) {
        elem.done = true
      }
      return elem
    })
    this.setState({
      tasks: tempTasks,
      qtyOfTasks: this.state.tasks.length
    })
  }

  Deleted = (id) => {
    var tempTasks = this.state.tasks.filter(function (elem) {
      return (id !== elem.id);
    })
    this.setState({
      tasks: tempTasks,
      qtyOfTasks: tempTasks.length
    })
  }

  addTask = (id, taskDescription, date) => {
    let currentTasks = this.state.tasks
    const taskId = uuidv1()
    if (id === "topButton") {
      currentTasks.unshift({
        taskText: taskDescription,
        date: date,
        done: false,
        id: taskId
      })
    }
    else {
      currentTasks.push({
        taskText: taskDescription,
        date: date,
        done: false,
        id: taskId
      })
    }
    this.setState({
      tasks: currentTasks,
      qtyOfTasks: this.state.tasks.length
    })
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
                indexkey={i}
                task={item}
                buttonHandlerFunction={this.buttonHandler}
                numOfTasks={this.state.qtyOfTasks} />
            })
          }

          <Numberoftasks
            qtyOfTasksFunction={this.qtyOfTasks}
            numOfTasks={this.state.qtyOfTasks} />
        </div>

        <div className="clearButton">

          <Clearbutton
            buttonHandlerFunction={this.buttonHandler}
            numOfTasks={this.state.qtyOfTasks} />
        </div>

        <div className="clearButton">
          <Sortbutton
            buttonHandlerFunction={this.buttonHandler}
            numOfTasks={this.state.qtyOfTasks} />

        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
