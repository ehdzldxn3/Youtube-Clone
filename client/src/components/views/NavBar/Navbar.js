import React, {Component, useEffect, useState, } from 'react'
import { useStyles, } from '../Styles/NavbarStyles'
import { AppBar, Toolbar, IconButton, Typography, Box, Badge, Button } from "@material-ui/core";
import { Menu, Search, } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { shallowEqual, useDispatch, useSelector } from "react-redux";


function Navbar() {

    //CSS
    const classes = useStyles();
    
    const auth = false
    //스토어에서 user 로그인 여부 가져옴
    const asdf = useSelector(state => state.user.userData.isAuth)

    console.log(asdf)
 
    
    // const auth = false
    console.log('네브바렌더링')
    

    const menuClick = () => {
        console.log("메인화면으로 넘어가게 만들기")
    }

    const SearchTAG = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));    
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '50ch',
            '&:focus': {
                width: '100ch',
              },
          },
        },
      }));


    return (
        <AppBar position="fixed" color="primary" className={classes.appbar}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={menuClick}>
                    <Menu/>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                Youtube
                </Typography>
                <SearchTAG>
                    <SearchIconWrapper>
                        <Search/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </SearchTAG>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {auth && (
                    <div>
                        <Button color="inherit">로그인</Button>
                        <Button color="inherit">로그아웃</Button>
                        <Button color="inherit">회원가입</Button>
                    </div>
                )}
                </Box>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar