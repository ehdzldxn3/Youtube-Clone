import React, {Component} from 'react'
import { useStyles, } from '../Styles/NavbarStyles'
import { AppBar, ThemeProvider, createTheme, } from "@material-ui/core";


function Navbar() {

    //CSS
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="primary" className={classes.appbar}>
            NavBar
        </AppBar>

    )
}

export default Navbar