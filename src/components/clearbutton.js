import React, { Component } from 'react';

class Clearbutton extends Component {

clearClicked = () => {
this.props.clearListFunction()
}
    render() {
        return (
            <div className="col text-center">
                <div className="btn btn-primary notifications">
                <button type="submit" onClick={this.clearClicked} className="btn btn-primary addbutton" data-toggle="tooltip" data-placement="bottom" title="Clears the whole list">Clear all items</button>
                </div>
            </div>
        )
    }
}


export default Clearbutton;