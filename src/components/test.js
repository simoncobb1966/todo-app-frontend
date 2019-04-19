import React, { Component } from 'react';

class Test extends Component {
    render(props) {
        return (
            // <h1 style={styles.header}>{this.props.headerText}</h1>
            // <h1>ToDo Application in React</h1>
            // <h1>{this.props.var}</h1>
            <div>
            <h1>{this.props.headingText}</h1>
            </div>
        )
    }
}

export default Test;