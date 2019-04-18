import React, { Component } from 'react';

class Entertodo extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-group" id="input">
                        <textarea class="form-control" id="todoInput" rows="1"
                            placeholder="Enter your todo here"></textarea>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Entertodo;