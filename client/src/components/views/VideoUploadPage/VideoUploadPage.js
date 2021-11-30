import { Title } from '@mui/icons-material'
import React, {useState, } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Typography, TextField, Box, Select, MenuItem, InputLabel, FormControl, Button, } from "@material-ui/core";
import { useStyles, } from '../Styles/VideoUploadStyles'
import Dropzone from 'react-dropzone'
import { PlusOneRounded,  } from '@mui/icons-material';







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

    const videoOnSubmit = (e) => {
        //onSubmit 새로고침 막는 이벤트
        e.preventDefault();
        console.log(title)
        console.log(description)
        console.log(setting)
        console.log(catogory)
    }

    return (
        <div style={{}}>
            <Container fixed style={{ verticalAlign:'middle'}}>
            <Typography align='center' component='div' variant="h3" color='primary'>Video Upload</Typography>
                <form onSubmit={videoOnSubmit}>
                    <div style={{ display:'flex', justifyContent:'space-between', paddingTop:'2vh'}}>
                        {/* 드랍존 */}
                        <Dropzone
                            onDrop
                            multiple
                            maxSize>
                                {({getRootProps, getInputProps}) => (
                                    <div style={{ width: '50vh', height:'30vh', border:'1px solid lightgray', display:'flex',
                                    alignItems:'center', justifyContent:'center'}} {...getRootProps}>
                                        <input {...getInputProps()}/>
                                        <PlusOneRounded sx={{ fontSize: 40 }} />
                                    </div>

                                )}
                        </Dropzone>
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
                    <br/>
                    <br/>
                    <Box align='center' style={{paddingTop:'2vh'}}>
                        <Button 
                            variant="contained"
                            color='primary'
                            style={{
                                width: '25vh', height: '5vh', fontSize: '5vh',
                            }}
                            type='onSubmit'
                            >
                            S A V E
                        </Button>
                    </Box>
                </form>
            </Container>
        </div>
    )
}

export default withRouter(VideoUploadPage)
