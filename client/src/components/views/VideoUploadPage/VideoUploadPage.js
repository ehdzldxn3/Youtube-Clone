import { Title } from '@mui/icons-material'
import React, {useState, } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Typography, TextField, Box} from "@material-ui/core";
import { useStyles, } from '../Styles/VideoUploadStyles'







function VideoUploadPage(props) {

    
    const [title, setTitle] = useState('')  //제목
    const [description, setDescription] = useState('')  //설명

    //CSS
    const classes = useStyles();

    const titleChange = (e) => {    //제목 체인지 이벤트
        setTitle(e.target.value)
    }

    const descriptionChange = (e) => {
        setDescription(e.target.value)
    }


    return (
        <div>
            <Container fixed>
            <Typography align='center' component='div' variant="h3">Video Upload</Typography>
                <Box>
                    <div style={{ display:'flex', justifyContent:'space-between'}}>
                        {/* 드랍존 */}
                        
                        {/* 썸네일 */}
                        <div>
                            <img src alt/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <TextField style={{width: '60vh'}} id="title" label="제목" variant="standard" value={title} onChange={titleChange}/>
                    <br/>
                    <br/>

                    <TextField 
                    id="description" 
                    label="설명" 
                    variant="standard" 
                    fullWidth value={description} 
                    onChange={descriptionChange}
                    />


                </Box>
            </Container>
        </div>
    )
}

export default withRouter(VideoUploadPage)
