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

addTaskClicked = ()=> {
    this.props.addTaskFunction(this.state.taskDescription)
 }

    render() {
        return (
            <div>
                <textarea onChange={this.inputBoxChanged} class="form-control" id="todoInput" rows="1"
                    placeholder="Enter your todo here"
                    >
                    </textarea>
                <div className="col text-center">
                    <button type="submit" onClick={this.addTaskClicked} class="btn btn-primary">Submit</button>
                </div>
            </div>
        )
    }
}

export default Entertodo;