import React, { Component } from 'react';

class Entertodo extends Component {

state = {
    taskDescription: ""
} 

inputBoxChanged = (event)=> {
    this.setState ({
        taskDescription: event.target.value
    })
}

addTaskEndClicked = ()=> {
    if (this.state.taskDescription !=="") {
    this.props.addTaskEndFunction(this.state.taskDescription)
    }
 }

 addTaskTopClicked = ()=> {
    if (this.state.taskDescription !=="") {
    this.props.addTaskTopFunction(this.state.taskDescription)
    }
 }

    render() {
        return (
            <div>
                <textarea onChange={this.inputBoxChanged} class="form-control" id="todoInput" rows="1"
                    placeholder="Enter your todo here"
                    >
                    </textarea>
                <div className="col text-center">
                    <button type="submit" onClick={this.addTaskEndClicked} className="btn btn-primary addbutton">Add to end of list</button>
                    <button type="submit" onClick={this.addTaskTopClicked} className="btn btn-primary addbutton">Add to top of list</button>
                </div>
            </div>
        )
    }
}

export default Entertodo;