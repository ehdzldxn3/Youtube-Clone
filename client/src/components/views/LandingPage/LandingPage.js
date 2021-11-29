import React, {useEffect, } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { AccessAlarm, ThreeDRotation,  } from '@mui/icons-material';


 function LandingPage(props) {



    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height:'100%'
        }}>
            <h2>시작 페이지</h2>
        </div>
    )
}

export default withRouter(LandingPage)

 
