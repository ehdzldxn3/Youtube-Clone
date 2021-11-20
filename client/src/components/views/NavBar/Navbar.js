import React, {Component} from 'react'
import { Box, AppBar, Toolbar, Typography,  } from '@material-ui/core';



function Navbar() {
    return (
        <AppBar position="static">
            <Typography variant="h6" color="inherit" component="div"><img src='../'/></Typography>
        </AppBar>
    )
}

export default Navbar
