import React, { Component } from 'react';

class Clearbutton extends Component {

    clearButtonText = () => {
        if (this.props.numOfTasks === 1) {
            return "Clear this item"
        }
        else {
            return "Clear all items"
        }
    }

    clearButtonClass = () => {
        if (this.props.numOfTasks === 0) {
            return "hide"
        } else {
            return "col text-center"
        }
    }


    render() {
        return (
            <div className={this.clearButtonClass()}>
                <div className="btn btn-primary notifications">
                    <button type="button" onClick={() => this.props.buttonHandlerFunction("clear")} className="btn btn-primary addbutton" data-toggle="tooltip" data-placement="bottom" title="Clears the whole list">{this.clearButtonText()}</button>
                </div>
            </div>
        )
    }
}


export default Clearbutton;