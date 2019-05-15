import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Clearbutton extends Component {

    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = (buttonName) => {
        this.setState({ open: false });
        this.props.buttonHandlerFunction(buttonName.currentTarget.value)
    };


    clearButtonText = () => {
        if (this.props.numOfTasks === 1) {
            return "Clear this item"
        }
        else {
            return "Clear all items"
        }
    }

    clearButtonClass = () => {
        if (this.props.numOfTasks === 0) {
            return "hide"
        } else {
            return "col text-center spacetb"
        }
    }


    render() {
        return (


            <div className={this.clearButtonClass()}>

                    <button type="button" onClick={this.handleClickOpen} className="btn btn-primary addbutton" data-toggle="tooltip" data-placement="bottom" title="Clears the whole list">{this.clearButtonText()}</button>
                    


                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Clear All Tasks?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to clear all tasks?
                  </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} value="cancel" color="primary" autoFocus>
                            Cancel
                  </Button>
                        <Button onClick={this.handleClose} value="clear" color="primary" >
                            Clear
                  </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


export default Clearbutton;