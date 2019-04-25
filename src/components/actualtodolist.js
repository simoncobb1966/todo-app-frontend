import React, { Component } from 'react';

class Actualtodolist extends Component {
    render() {
        return (
            <div>
                <div className="row mainList">
                    <div className="col-sm-12 col-md-8 todoText">
                    {this.props.taskDescription}
            
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <button type="button" class="btn btn-success buttona">Done</button>
                        <button type="button" class="btn btn-danger buttona">Delete</button>
                    </div>
                    {/* <element class="btn btn-primary notifications">
                    Number of items <span class="badge badge-light">3</span>
                </element> */}
                </div>
            </div>

        )
    }
}

export default Actualtodolist;