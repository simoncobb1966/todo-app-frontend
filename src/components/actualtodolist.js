import React, { Component } from 'react';

class Actualtodolist extends Component {

    arrowClicked = (event) => {
        this.props.buttonHandlerFunction(event.target.id, this.props.keyValue)
    }

    doneClicked = (event) => {
        this.props.buttonHandlerFunction(event.target.id, this.props.keyValue)
    }

    deletedClicked = (event) => {
        this.props.buttonHandlerFunction(event.target.id, this.props.keyValue)
    }

    textCol = () => {
        if (this.props.taskStatus === "DONE") {
            return "green"
        } else {
            return "black"
        }
    }

    hiderow = () => {
        if (this.props.taskStatus === "DELETED") {
            return "hiderow"
        } else {
            return "viewrow"
        }
    }

    hideButtons = () => {
        if (this.props.numOfTasks === 1) {
            return "hiderow"
        } else {
            return "btn btn-info buttona"
        }
    }


    render() {

        return (
            <div className={this.hiderow()}>
                <div className="row ">
                    <div className="col-sm-12 col-md-6 col-lg-8 todoText">
                        {
                            <div id={this.props.keyValue} className={this.textCol()} >{this.props.taskDescription}</div>
                        }
                    </div>



                    <div className="col-sm-12 col-md-6 col-lg-4 buttonDiv">
                        <button type="button" id="done" onClick={this.doneClicked} class="btn btn-success buttona" data-toggle="tooltip" data-placement="bottom" title="Marks the task as done">Done</button>
                        <button type="button" onClick={this.arrowClicked} class="btn btn-info buttona" id="upButton" data-toggle="tooltip" data-placement="top" title="Move the task up the list" className={this.hideButtons()}>↑</button>
                        <button type="button" onClick={this.arrowClicked} class="btn btn-info buttona" id="downButton" data-toggle="tooltip" data-placement="bottom" title="Move the task down the list" className={this.hideButtons()}>↓</button>
                        <button type="button" id="delete" onClick={this.deletedClicked} class="btn btn-danger buttona" data-toggle="tooltip" data-placement="bottom" title="Deletes the task" >Delete</button>



                    </div>
                </div >
            </div>
        )
    }
}

export default Actualtodolist;