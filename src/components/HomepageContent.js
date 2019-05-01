import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';



const HomepageContent = (classes, theme) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" onClick={() => setDrawerOpen(true)}>
                    </IconButton>
                    <Typography variant="h6" color="inherit" >
                        Ramadan App
          </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                open={isDrawerOpen}
                anchor="left"
                classes={{
                    paper: classNames({
                        [classes.drawerOpen]: isDrawerOpen,
                        [classes.drawerClose]: !isDrawerOpen,
                    })
                }}
            >

                <Divider />
               
                <Divider />
                
            </Drawer>
        </div>
    )
}

export default HomepageContent;