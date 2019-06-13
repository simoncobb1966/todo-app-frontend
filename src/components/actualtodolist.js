import React, { Component } from 'react';
import moment from 'moment'


class Actualtodolist extends Component {

    // SETS CSS FOR THE TASK DEPENDING ON IF DONE OR NOT
    textCol = () => {
        if (this.props.task.done) {
            return "green normalSize"
        } else {
            return "black normalSize"
        }
    }

    render() {
        const today = moment()
        const isOverdue = moment(this.props.task.date).isBefore(today)
        return (

            <div className="row ">
                <div className="col-sm-12 col-md-6 col-lg-8 todoText">
                    {
                        <div id={this.props.taskId}>
                            <span className={isOverdue ? "overdue xsmall" : "xsmall"}>
                                {moment(this.props.task.date).format("Do MMM YYYY")}
                            </span>
                            <span>{"  "}</span>
                            <span className={this.textCol()}>
                                {this.props.task.description}
                            </span>
                        </div>
                    }
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 buttonDiv">
                    {!this.props.task.done &&
                        <button type="button" onClick={() => this.props.doneFunction(this.props.task.taskid)} className="btn btn-success buttona" data-toggle="tooltip" data-placement="bottom" title="Marks the task as done">Done</button>
                    }
                    <button type="button" onClick={() => this.props.deleteFunction(this.props.task.taskid)} className="btn btn-danger buttona" data-toggle="tooltip" data-placement="bottom" title="Deletes the task" >Delete</button>
                </div>
            </div >
        )
    }
}

export default Actualtodolist;