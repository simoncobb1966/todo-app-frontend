import React, { Component } from 'react';

class Numberoftasks extends Component {
    render() {
        return (
            <div className="col text-center">
                <div className="btn btn-primary notifications">
                    Number of items to do <span class="badge badge-light">{this.props.numOfTasks}</span>
                </div>
            </div>
        )
    }
}

export default Numberoftasks;