import React, {useEffect, useState, } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {Box, Grid, Card, Typography} from '@material-ui/core'
import video from 'ffmpeg/lib/video';





 function LandingPage(props) {

    const ShadowBox = ({ shadow }) => (
        <Card sx={{ mb: 3, boxShadow: shadow }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 10,
                    bgcolor: 'primary.light',
                    color: 'grey.800'
                }}
            >
                <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
            </Box>
        </Card>
    );
    
    const [video, setVideo] = useState([])

    useEffect( () => {
        axios.get('/api/video/getVideo')
        .then(res => {
            if(res.data.success) {
                setVideo(res.data.videos)
            } else {
                alert('비디오 가져오기 실패')
            }
        })
    }, [])

    const renderVideo = video.map( (video, index) => {

        return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShadowBox shadow="0" />
            </Grid>
        )

    })

    return (
        <div style={{width: '85%', margin: '3rem auto'}}>
            <Typography variant='h2' style={{borderBottom : '1px solid'}}>V I D E O</Typography>

            <Grid container spacing={3} style={{marginTop: '1vh'}}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>

                    {renderVideo}

                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter(LandingPage)

 
