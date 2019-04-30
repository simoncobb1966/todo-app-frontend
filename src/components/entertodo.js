import React, { Component } from 'react';

class Entertodo extends Component {

    state = {
        taskDescription: ""
    }

    inputBoxChanged = (event) => {
        this.setState({
            taskDescription: event.target.value
        })
    }

    addTaskClicked = (event) => {
        if (this.state.taskDescription !== "") {
            //turn 1st char to upper case
            var taskString = this.state.taskDescription.charAt(0).toUpperCase()+this.state.taskDescription.slice(1)
            this.props.buttonHandlerFunction(event.target.id, taskString)
            this.refs.textInput.value="";
            this.setState({
                taskDescription: ""
            })
        }
    }

    render() {
        return (
            <div className="todoinput col text-center">
                <input type="text" ref="textInput"
                 placeholder = "Add task here"
                    onChange={this.inputBoxChanged} 
                    className="form-control todoInput">
                </input>
                <button type="submit" onClick={this.addTaskClicked} id="topButton" className="btn btn-primary addbutton">Add to top of list</button>
                <button type="submit" onClick={this.addTaskClicked} id="endButton" className="btn btn-primary addbutton">Add to end of list</button>
            </div>
        )
    }
}

export default Entertodo;