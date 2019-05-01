import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LoginDialog from "./common/Login"



const HomepageContent = (classes, theme) => {
    const [isLoginDialogOpen, setLoginDialogOpen] = useState(false)

    return (
        <div className="app-header-main"><AppBar>
            <Toolbar>
                <IconButton aria-label="Menu" ></IconButton>
                <Typography variant="h6" color="inherit" >
                    Ramadan App
          </Typography>
                <Button style={{ position: "relative", left: "85%" }} color="inherit" onClick={() => { setLoginDialogOpen(!isLoginDialogOpen) }}>Login</Button>
            </Toolbar>
        </AppBar>
            <LoginDialog
                open={isLoginDialogOpen}
                onClick={() => { setLoginDialogOpen(!isLoginDialogOpen) }}
            />
        </div>
    )
}

export default HomepageContent;