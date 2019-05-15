import React, { Component } from 'react';
import moment from 'moment'


class Actualtodolist extends Component {

    textCol = () => {
        if (this.props.task.done) {
            return "green"
        } else {
            return "black"
        }
    }

    doneButton = () => {
        if (this.props.task.done) {
            return "hide"
        } else {
            return "btn btn-success buttona"
        }
    }

    hideButtons = () => {
        if (this.props.numOfTasks === 1) {
            return "hide"
        } else {
            return "btn btn-info buttona"
        }
    }

    firstUpButton = () => {
        if (this.props.numOfTasks === 1 || this.props.indexkey === 0) {
            return "hide"
        }
        else return "btn btn-info buttona"
    }

    lastDownButton = () => {
        if (this.props.numOfTasks === 1 || this.props.indexkey === this.props.numOfTasks - 1) { return "hide" }
        else return "btn btn-info buttona"
    }

    render() {
        const today = moment()
        const isOverdue = this.props.task.date.isBefore(today)
        return (
            <div className="row ">
                <div className="col-sm-12 col-md-6 col-lg-8 todoText">
                    {
                        <div id={this.props.task.id} className={this.textCol()} >
                        {this.props.task.taskText} 
                        &nbsp;
                            <span className={isOverdue ? "overdue" : ""}>
                                {moment(this.props.task.date, "DD-MM-YYYY").format("Do MMM YYYY")}
                            </span>
                        </div>
                    }
                </div>



                <div className="col-sm-12 col-md-6 col-lg-4 buttonDiv">
                    <button type="button" onClick={() => this.props.buttonHandlerFunction("done", this.props.task.id)} className={this.doneButton()} data-toggle="tooltip" data-placement="bottom" title="Marks the task as done">Done</button>
                    <button type="button" onClick={() => this.props.buttonHandlerFunction("upButton", this.props.task.id)} className={this.firstUpButton()} data-toggle="tooltip" data-placement="top" title="Move the task up the list" >↑</button>
                    <button type="button" onClick={() => this.props.buttonHandlerFunction("downButton", this.props.task.id)} className={this.lastDownButton()} data-toggle="tooltip" data-placement="bottom" title="Move the task down the list" >↓</button>
                    <button type="button" onClick={() => this.props.buttonHandlerFunction("delete", this.props.task.id)} class="btn btn-danger buttona" data-toggle="tooltip" data-placement="bottom" title="Deletes the task" >Delete</button>
                </div>
            </div >
        )
    }
}

export default Actualtodolist;