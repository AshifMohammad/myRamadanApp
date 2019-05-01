import React from "react"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const LoginDialog = (props) => {
    console.log(props)
    return (
        <div className="login-dialog-form">

            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Assalamualaikum,
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClick} color="primary">
                        Cancel
        </Button>
                    <Button onClick={props.onClick} color="primary">
                        Subscribe
        </Button>
                </DialogActions>
            </Dialog>
        </div >)

}
export default LoginDialog;

