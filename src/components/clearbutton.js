import React, { Component } from 'react';

class Clearbutton extends Component {

clearClicked = () => {
    alert ("clear clicked")
this.props.clearListFunction()
}
    render() {
        return (
            <div className="col text-center">
                <div className="btn btn-primary notifications">
                <button type="submit" onClick={this.clearClicked} className="btn btn-primary addbutton">Clear all items2</button>
                </div>
            </div>
        )
    }
}


export default Clearbutton;