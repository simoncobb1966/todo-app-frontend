import React, { Component } from 'react';
import moment from 'moment'
import { throws } from 'assert';

class Entertodo extends Component {

    state = {
        taskDescription: "",
        date: "",
        errorMessage: ""
    }

    inputBoxChanged = (event) => {
        this.setState({
            taskDescription: event.target.value
        })
    }

    addTaskClicked = (event) => {

        if (this.state.date==="") {
            this.setState({
                errorMessage: "Please Enter Date"
            }) }   else  {
        if (this.state.taskDescription !== "") {
            var newDate=moment(this.state.date, "YYYY-MM-DD")
            //turn 1st char to upper case
            var taskString = this.state.taskDescription.charAt(0).toUpperCase() + this.state.taskDescription.slice(1)
            this.props.buttonHandlerFunction(event.target.id, taskString, newDate)
            this.refs.textInput.value = "";
            this.setState({
                taskDescription: "",
                date: ""
            })
        }
    }
    }

    hideButtons = () => {
        if (this.props.numOfTasks === 0) {
            return "hide"
        } else {
            return "btn btn-primary addbutton"
        }
    }

handleDateChange = (event)=>{
    // console.log(event.target.value)
    const date = event.target.value
    this.setState({
        date: date,
        errorMessage: ""
    })
}

    render() {
        // const defaultDate=new Date()
        return (
            <div>
            <div className="todoinput col text-center">
                <input type="text" ref="textInput"
                    placeholder="Add task here"
                    onChange={this.inputBoxChanged}
                    className="form-control todoInput">
                </input>
                
                <label htmlForm="dateInput">Done By Date</label>
                <input id="dateInput" type="date" onChange={this.handleDateChange} value={this.state.date}/>
                <button type="submit" onClick={this.addTaskClicked} id="topButton" className="btn btn-primary addbutton">Add to top of list</button>
                <button type="submit" onClick={this.addTaskClicked} id="endButton" className={this.hideButtons()} >Add to end of list</button>
            </div>
            <h2 className="centered red">{this.state.errorMessage}</h2>
            </div>

        )
    }
}

export default Entertodo;