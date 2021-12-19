import React, { useState, } from 'react'
import { useDispatch } from 'react-redux'
import { Grid, TextField, Avatar, Box } from '@material-ui/core'
import {  signUp } from '../../../_actions/user_action'


export default function RegisterPage(props) {

    const dispatch = useDispatch()
    
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    
    // const onEmailHandler = (e) => {
    //     setEmail(e.currentTarget.value)            
    // }
    // const onPasswordHandler = (e) => {
    //     setPassword(e.currentTarget.value)
    // }
    // const onNameHandler = (e) => {
    //     setName(e.currentTarget.value)
    // }
    // const onConfirmPasswordHandler = (e) => {
    //     setConfirmPassword(e.currentTarget.value)
    // }


    const onSubmitHandler = (e) => {
        //onSubmit 새로고침 막는 이벤트
        e.preventDefault();

        if(Password !== ConfirmPassword ) {
            alert('비밀번호가 다릅니다.')
        }
        //서버에 보낼 데이터
        let body = {
            email : Email,
            name : Name,
            password : Password,
        }
        
        dispatch(signUp(body))
            .then(response => {
                if( response.payload.success ){
                    props.history.push('/login')
                } else {
                    alert('에러')
                }
            })

    }

    return (
        <Box
          sx={{
            marginTop: '10vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
        <div  style={{background: '#BDBDBD', width:'20vh', height:'20vh', borderRadius:'70%',overflow:'hidden'}}>
            <img style={{width:'100%', height:'100%', objectFit:'cover'}}alt='이미지'/>
        </div>
            <br />
            <br />      
            <form 
            // style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            variant='outlined'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            variant='outlined'
                        />
                    </Grid>  
                    
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="E-Mail"
                            name="email"
                            variant='outlined'
                        />
                    </Grid>     

                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="Password"
                            label="Password"
                            name="Password"
                            type='password'
                            variant='outlined'
                        />
                    </Grid>    
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="ConfirmPassword"
                            label="ConfirmPassword"
                            name="ConfirmPassword"
                            type='password'
                            variant='outlined'
                            
                        />
                    </Grid>                                                   
                {/* <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>
                
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler}/>

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/> */}

                </Grid>
                <br/>
            </form>
            <button>Login</button>
        </Box>
        
    )
}

 
