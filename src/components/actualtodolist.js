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


    render() {

        return (
            <div className={this.hiderow()}>
                <div className="row ">
                    <div className="col-sm-12 col-md-8 todoText">
                        {
                            <div id={this.props.keyValue} className={this.textCol()} >{this.props.taskDescription}</div>
                        }
                    </div>

                    <div className="col-sm-6 col-md-2">
                        <button type="button" id="done" onClick={this.doneClicked} class="btn btn-success buttona">Done</button>
                        <button type="button" onClick={this.arrowClicked} class="btn btn-info buttona" id="upButton">↑</button>
                    </div>
                    <div className="col-sm-6 col-md-2">
                        <button type="button" onClick={this.arrowClicked} class="btn btn-info buttona" id="downButton">↓</button>
                        <button type="button" id="delete" onClick={this.deletedClicked} class="btn btn-danger buttona" >Delete</button>
                    </div>
                </div >
            </div>
        )
    }
}

export default Actualtodolist;