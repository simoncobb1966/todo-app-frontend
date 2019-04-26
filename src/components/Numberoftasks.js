import React, { Component } from 'react';

class Numberoftasks extends Component {
    render() {
        return (
            <div className="col text-center">
                <div className="btn btn-primary notifications">
                    {/* Number of items <span class="badge badge-light">{this.props.numberOfTasks}</span> */}
                    Number of items <span class="badge badge-light">{this.props.qtyOfTasksFunction()}</span>
                </div>
            </div>
        )
    }
}

export default Numberoftasks;