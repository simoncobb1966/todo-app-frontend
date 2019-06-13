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
    qtyOfTasks: 0,
    isLoaded: false
  }

  //Anything in here happens on the 1st initial render of the component
  componentDidMount = () => {
    this.getTasks()
  }

  async getTasks() {
    let response = await axios.get("https://f8nibhiadf.execute-api.eu-west-2.amazonaws.com/dev/tasks");
    let { data } = response
    this.setState({
      tasks: this.sort(data.tasks),
      isLoaded: true
    })
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

  Done = (id) => {
    var tempTasks = this.state.tasks.map((elem, i) => {
      if (elem.taskid === id) {
        elem.done = true
      }
      return elem
    })
    this.setState({
      tasks: tempTasks
    })
    this.dbDoneUpdate(id)
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

  Deleted = (id) => {
    var tempTasks = this.state.tasks.filter(function (elem) {
      return (id !== elem.taskid);
    })
    this.dbDelete(id)
    this.setState({
      tasks: tempTasks
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

  addTask = (taskDescription, date) => {
    var tasks
    const taskObject = {
      description: taskDescription,
      done: false,
      userid: 1,
      date: date
    }
    tasks = this.state.tasks.slice()
    tasks.unshift(taskObject)
    // THIS BIT SENDS THE DATA TO THE SERVER
    axios.post("https://f8nibhiadf.execute-api.eu-west-2.amazonaws.com/dev/tasks",
      taskObject
    )
      .then(result => {
        tasks[0].taskid = result.data.taskId
        tasks = this.sort(tasks)
        this.setState({
          tasks: tasks
        })
        return
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (

      <div className="container mainstyle">
        <Header />

        {/* USER INPUT THE TASK & DATE*/}
        <Entertodo
          buttonHandlerFunction={this.addTask}
          numOfTasks={this.state.qtyOfTasks} />

        {/* DISPLAY THE TASKS (WITH DATE DONE/DELETE BUTTONS) OR "FETCHING TASKS" */}
        {this.state.isLoaded ? (
          <div className="mainList">
            {
              this.state.tasks.map((item, i) => {
                return <Actualtodolist
                  key={item.taskid}
                  task={item}
                  // buttonHandlerFunction={this.addTask}
                  doneFunction={this.Done}
                  deleteFunction={this.Deleted}
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
