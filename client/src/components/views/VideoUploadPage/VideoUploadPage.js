import { Title } from '@mui/icons-material'
import React, {useState, } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Typography, TextField, Box, Select, MenuItem, InputLabel, FormControl, } from "@material-ui/core";
import { useStyles, } from '../Styles/VideoUploadStyles'







function VideoUploadPage(props) {

    
    const [title, setTitle] = useState('')  //제목
    const [description, setDescription] = useState('')  //설명
    const [setting, setSetting] = useState()    //보안
    const [catogory, setCatogory] = useState()    //보안

    //CSS
    const classes = useStyles();

    const titleChange = (e) => {    //제목 체인지 이벤트
        setTitle(e.target.value)
    }

    const descriptionChange = (e) => {  //설명 체인지 이벤트
        setDescription(e.target.value)
    }

    const settingChange = (e) => {  //보안 체인지 이벤트
        setSetting(e.target.value)
    }

    const catogoryChange = (e) => {
        setCatogory(e.target.value)
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
                    {/* 제목 */}
                    <TextField  
                        className={classes.title}
                        id="title" 
                        label="제목" 
                        variant="standard" 
                        value={title} 
                        onChange={titleChange}/>
                    <br/>
                    <br/>
                    {/* 설명 */}
                    <TextField 
                    id="description" 
                    label="설명" 
                    variant="standard" 
                    fullWidth value={description} 
                    onChange={descriptionChange}
                    />
                    <br/>
                    <br/>
                    {/* 보안설정 */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="setting_Label">보안설정</InputLabel>
                        <Select
                            labelId="setting_Label"
                            id="setting"
                            value={setting||''}
                            onChange={settingChange}
                            style={{ width: '60vh' }}
                            label="Setting"
                        >
                            <MenuItem value=''><em>None</em></MenuItem>
                            <MenuItem value={0}>Private</MenuItem>
                            <MenuItem value={1}>Public</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <br/>
                    {/* 카테고리 */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="catogory_Label" >카테고리</InputLabel>
                        <Select
                            labelId="catogory_Label"
                            id="catogory"
                            value={catogory||''}
                            onChange={catogoryChange}
                            style={{ width: '60vh' }}
                            label="Catogory"
                        >
                            <MenuItem value=''><em>None</em></MenuItem>
                            <MenuItem value={0}>Film & Animation</MenuItem>
                            <MenuItem value={1}>Autos & Vehicles</MenuItem>
                            <MenuItem value={2}>Music</MenuItem>
                            <MenuItem value={3}>Pets & Animals</MenuItem>
                            <MenuItem value={4}>Sports</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Container>
        </div>
    )
}

export default withRouter(VideoUploadPage)
