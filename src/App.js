import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Entertodo from './components/entertodo';
import Actualtodolist from './components/actualtodolist'
import Footer from './components/footer'
import Numberoftasks from './components/Numberoftasks'
import moment from 'moment'
import axios from "axios"


class App extends Component {

  state = {
    tasks: [],
    lastNum: 0,
    qtyOfTasks: 0,
    isLoaded: false,
    sorted: false
  }

  //Anything in here happens on the 1st initial render of the component
  componentDidMount = () => {
    axios.get("https://f8nibhiadf.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      .then(result => {
        this.setState({
          tasks: result.data.tasks,
          lastNum: result.data.tasks[result.data.tasks.length - 1].num,
          isLoaded: true
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  // NORMAL STUFF NOW

  componentDidUpdate() {
    if (this.state.isLoaded && !this.state.sorted) {
      var tasks = this.sort(this.state.tasks)
      var copyState = this.state
      copyState.tasks = tasks
      copyState.sorted = true
      copyState.lastNum = tasks[tasks.length - 1].num
      var highestNum = 0
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].num > highestNum) {
          highestNum = tasks[i].num
        }
      }
      copyState.lastNum = highestNum + 1
      this.setState({
        copyState
      })
    }
  }

  buttonHandler = (button, data, date) => {
    if (button === "done") { this.Done(data) }
    if (button === "delete") { this.Deleted(data) }
    if (button === "addTask") { this.addTask(button, data, date) }
  }

  sort = (tasks) => {
    if (tasks.length < 2) { return tasks }
    do {
      var switcher = this.sortPass(tasks)
    }
    while (switcher === 1)
    return (tasks)
  }

  sortPass = (tasks) => {
    var switcher = 0
    var i = tasks.length - 1
    do {
      if (moment(tasks[i].date).isBefore(moment(tasks[i - 1].date))) {
        switcher = 1
        var temp = tasks[i]
        var temp1 = tasks[i - 1]
        tasks[i] = temp1
        tasks[i - 1] = temp
      }
      i--
    }
    while (i > 0)
    return (switcher)
  }

  Done = (num) => {
    var thisOne
    var tempTasks = this.state.tasks.map((elem, i) => {
      if (elem.num === num) {
        elem.done = true
        thisOne = elem.num
      }
      return elem
    })
    this.setState({
      tasks: tempTasks
    })
    this.dbDoneUpdate(thisOne)

  }

  Deleted = (num) => {
    var tempTasks = this.state.tasks.filter(function (elem) {
      return (num === elem.num);
    })
    tempTasks = this.state.tasks.filter(function (elem) {
      return (num !== elem.num);
    })
    this.dbDelete(num)
    this.setState({
      tasks: tempTasks
    })
  }

  dbDoneUpdate = (num) => {
    const url = "https://f8nibhiadf.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + num.toString()
    axios.put(url)
      .then(result => {
        // Task if deleted OK
      })
      .catch(err => {
        console.log(err)
      })
  }

  dbDelete = (id) => {
    const url = "https://f8nibhiadf.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + id.toString()
    axios.delete(url)
      .then(result => {
        // Task if deleted OK
      })
      .catch(err => {
        console.log(err)
      })
  }

  dbDeleteAll = () => {
    let num = this.state.tasks.length
    for (let i = 0; i < num; i++) {
      this.dbDelete(this.state.tasks[i].taskid)
    }
  }

  dbAddTask = (object) => {
    axios.post("https://f8nibhiadf.execute-api.eu-west-2.amazonaws.com/dev/tasks",
      object
    )
      .then(result => {
        return (result.data.taskId)
      })
      .catch(err => {
        console.log(err)
      })
  }

  addTask = (id, taskDescription, date) => {
    this.setState({ lastNum: this.state.lastNum + 1 })
    var tasks
    const taskObject = {
      description: taskDescription,
      done: false,
      userid: 1,
      date: date,
      num: this.state.lastNum,
    }
    tasks = this.state.tasks.slice()
    tasks.push(taskObject)
    tasks[0].taskid = this.dbAddTask(taskObject)
    tasks = this.sort(tasks)
    this.setState({
      tasks: tasks
    })
  }

  render() {

    return (

      <div className="container mainstyle">
        <Header />

        {/* USER INPUT THE TASK & DATE*/}
        <Entertodo
          buttonHandlerFunction={this.buttonHandler}
          numOfTasks={this.state.qtyOfTasks} />

        {/* DISPLAY THE TASKS (WITH DATE DONE/DELETE BUTTONS) OR "FETCHING TASKS" */}
        {this.state.isLoaded ? (
          <div className="mainList">
            {
              this.state.tasks.map((item, i) => {
                return <Actualtodolist
                  key={item.num}
                  task={item}
                  buttonHandlerFunction={this.buttonHandler}
                  numOfTasks={this.state.qtyOfTasks} />
              })
            }

            {/* DISPLAY THE NUMBER OF TASKS BUTTON */}
            <Numberoftasks
              qtyOfTasksFunction={this.qtyOfTasks}
              numOfTasks={this.state.tasks.length} />
          </div>
        )
          : ("Fetching Tasks")
        }

        <Footer />
      </div>

    );
  }
}

export default App;
