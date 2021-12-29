import React, { useEffect, useState, } from 'react'
import { withRouter, } from 'react-router-dom'
import { Grid,Box, Input} from '@material-ui/core'
import { List, Avatar, Row, Col } from 'antd';
import axios from 'axios';

function VideoDetailPage(props) {
    //주소창에 있는 비디오 아이디를 가져옴
    const videoId = props.match.params.videoId 

    console.log(props.match.params)
    const variable ={videoId: videoId}

    const [videoDetail, setVideoDetail] = useState([])




    useEffect( ()=> {
        axios.get('/api/video/getVideoDetail', variable)
            .then(res => {
                if(res.data.success) {
                    console.log(res.data)
                    setVideoDetail(res.data.videoDetail)

                } else {
                    alert('비디오 정보를 가져오지 못했습니다.')
                }
            })
    }, [])

    if(videoDetail.writer) {
        return (
            <Row gutter={[16, 16]}>
                <Col lg={18} xs={24}>
                    <div  style={{ width: '100%', padding: '3rem 4rem' }}>
                        <video style={{ width: '100%' }} 
                        src={`http://localhost:5000/${videoDetail.filePath}`} controls/>
                         
    
                        <List.Item
                            // actions={[<LikeDislikes video videoId={videoId} userId={localStorage.getItem('userId')} />, <Subscriber userTo={Video.writer._id} userFrom={localStorage.getItem('userId')} />]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={videoDetail.writer && videoDetail.writer.image} />}
                                title={<a href="https://ant.design">{videoDetail.title}</a>}
                                description={videoDetail.description}
                            />
                            <div></div>
                        </List.Item>
    
                    {/* <Comments CommentLists={CommentLists} postId={Video._id} refreshFunction={updateComment} /> */}
    
                    </div>
                </Col>
                <Col lg={6} xs={24}>
    
                    {/* <SideVideo /> */}
    
                </Col>
            </Row>
        )
    } else {
        return (
            <div>...loading</div>
        )
    }


}

export default withRouter(VideoDetailPage)
