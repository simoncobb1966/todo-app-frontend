import React, { Component } from 'react';

class Actualtodolist extends Component {
    render() {
        return (

            <div class="row mainList">
                <div class="col-lg-9 col-sm-12 col-md-8 todoText" id="todo1">
                    <p>(1) Dentists at 2pm on Monday. Root treatment</p>
                </div>
                <div class="col-lg-3 col-sm-12 col-md-4">
                    <button type="button" class="btn btn-success buttona">Done</button>
                    <button type="button" class="btn btn-danger buttona">Delete</button>
                </div>
                <div class="col-lg-9 col-sm-12 col-md-8 todoText" id="todo2">
                    <p>(2) Check broadband pricing - contract up for renewal </p>
                </div>
                <div class="col-lg-3 col-sm-12 col-md-4">
                    <button type="button" class="btn btn-success buttona">Done</button>
                    <button type="button" class="btn btn-danger buttona">Delete</button>
                </div>
                <div class="col-lg-9 col-sm-12 col-md-8 todoText" id="todo3">
                    <p>(3) Bradford City V Coventry. 3pm @ coventry</p>
                </div>
                <div class="col-lg-3 col-sm-12 col-md-4">
                    <button type="button" class="btn btn-success buttona">Done</button>
                    <button type="button" class="btn btn-danger buttona">Delete</button>
                </div>
                <element class="btn btn-primary notifications">
                    Number of items <span class="badge badge-light">3</span>
                </element>
            </div>
        )
    }
}

export default Actualtodolist;