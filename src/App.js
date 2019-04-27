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
    qtyOfTasks: 0
  }

clearList = () => {
alert ("clear list function")

  this.setState({
    tasks: []
  })
}

  addDone = (kv) => {
    let currentTasks = this.state.tasks
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

  addTaskEnd = (taskDescription) => {
    let currentTasks = this.state.tasks
    currentTasks.push({
      taskText: taskDescription,
      status: "ACTIVE"
    })
    this.setState({
      tasks: currentTasks
    })
  }

  addTaskTop = (taskDescription) => {
    let currentTasks = this.state.tasks
    currentTasks.unshift({
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


    return (

      <div className="container mainstyle">
        <Header headingText={headinginfo} />

        <Entertodo addTaskEndFunction={this.addTaskEnd}
          addTaskTopFunction={this.addTaskTop}
        />

        <div className="mainList">

          {
            this.state.tasks.map((item, i) => {
              return <Actualtodolist
                addDoneFunction={this.addDone}
                addDeletedFunction={this.addDeleted}
                keyValue={i} taskDescription={item.taskText} taskStatus={item.status} />
            })
          }

          <Numberoftasks qtyOfTasksFunction={this.qtyOfTasks} />
        </div>

        <div className="clearButton">
          <Clearbutton clearListFunction={this.clearList} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
