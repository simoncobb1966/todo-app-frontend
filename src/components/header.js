import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="heading">
                <h1>{this.props.headingText}</h1>
            </div>
        )
    }
}

export default Header;