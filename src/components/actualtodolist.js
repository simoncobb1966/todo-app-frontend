import React, { Component } from 'react';

class Actualtodolist extends Component {
    render() {
        return (

            <div className="row">
                <div className="col-sm-12 col-md-8 todoText">
                    {this.props.taskDescription}
                </div>

                <div className="col-sm-6 col-md-2">
                    <button type="button" class="btn btn-success buttona">Done</button>
                </div>
                <div className="col-sm-6 col-md-2">
                    <button type="button" class="btn btn-danger buttona">Delete</button>
                </div>
            </div >
            )
    }
}

export default Actualtodolist;