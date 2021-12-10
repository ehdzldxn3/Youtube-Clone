//몽고디비
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = mongoose.Schema({
    writer:{    //작성자
        type: Schema.Types.ObjectId,    //스키마로 불러옴 유저 아이디로 저장
        ref: 'User',
    },
    title : {   //제목
        type:String,
        maxlength: 50,
    },
    description: {  //설명
        type: String,
    },
    setting: {  //보안
        type: Number,
    },
    filePath : {    //비디오경로
        type: String,
    },
    catogory: { //카테고리
        type: String,   
    },
    views : {   //
        type: Number,
        default: 0 
    },
    duration :{
        type: String
    },
    thumbnail: {
        type: String
    }
}, { timestamps: true })    //업로드 시간 생성한 시간 표시 된다!


//User라는 이름으로  스키마를 모델로 감싼다
const Video = mongoose.model('Video', videoSchema)

//밖에서도 쓰려고 하는 설정
module.exports = { Video }