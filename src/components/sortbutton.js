import React, { Component } from 'react';
import moment from 'moment'
// import { throws } from 'assert';

class Sortbutton extends Component {

    showSortButton = () => {
        if (this.props.numOfTasks > 1) {
            return "col-12 centered spacetb"
        } else {
        return "hide"
    }
    }

    sortButton = () => {
        this.props.buttonHandlerFunction("sort")
    };

    render() {

        return (

            <div className={this.showSortButton()}>
                <button name="sort" type="button" onClick={this.sortButton} className='btn btn-primary addbutton' data-toggle="tooltip" data-placement="bottom" title='Sorts the list into date order'>Sort</button>
            </div>

        )
    }
}

export default Sortbutton;