import React, { Component } from 'react';

class Actualtodolist extends Component {

    arrowClicked=(event) =>{
        this.props.moveTaskFunction(event.target.id, this.props.keyValue)
    }

    doneClicked = () => {
        this.props.addDoneFunction(this.props.keyValue)
    }

    deletedClicked = () => {
        this.props.addDeletedFunction(this.props.keyValue)
    }

    textCol = () => {
        if (this.props.taskStatus === "DONE") {
            return "green"
        } else {
            return "black"
        }
    }




    render() {

        var col = ""

        return (

            <div className="row">
                <div className="col-sm-12 col-md-8 todoText">
                    {
                        <div className={this.textCol()} >{this.props.taskDescription}</div>
                    }
                </div>

                <div className="col-sm-6 col-md-2">
                    <button type="button" onClick={this.doneClicked} class="btn btn-success buttona">Done</button>
                    <button type="button" onClick={this.arrowClicked} class="btn btn-info buttona" id="upButton">↑</button>
                </div>
                <div className="col-sm-6 col-md-2">
                <button type="button" onClick={this.arrowClicked} class="btn btn-info buttona" id="downButton">↓</button>
                    <button type="button" onClick={this.deletedClicked} class="btn btn-danger buttona" >Delete</button>
                </div>
            </div >
        )
    }
}

export default Actualtodolist;