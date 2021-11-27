import React, {Component, useEffect, useState, } from 'react'
import { useStyles, SearchTAG, } from '../Styles/NavbarStyles'
import { AppBar, Toolbar, IconButton, Typography, Box, Badge, Button } from "@material-ui/core";
import { Menu, Search, } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { shallowEqual, useDispatch, useSelector } from "react-redux";


function Navbar() {

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


    //CSS
    const classes = useStyles();
    
    //true 로그인 한 상태
    //false 로그인 하지않은 상태
    //화면 체크용
    //리덕스 스토어에 데이터 있는지 체크
    const check = useSelector(state => state.user.userData)    
    const auth = check === undefined ? false : check.isAuth
    

    const youtubeClick = () => {
        console.log("메인화면으로 넘어가게 만들기")
    }

    
    
    


    return (
        <AppBar className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" component="div">
                <div className={classes.youtube} onClick={youtubeClick}>Youtube</div>
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
                <div> 
                  {auth === false ? 
                  <div>
                    <Button color="inherit">로그인</Button>
                    <Button color="inherit">회원가입</Button>
                  </div>
                  : 
                  <div>
                    <Button color="inherit">로그인</Button>
                  </div>}
                </div>
                </Box>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar