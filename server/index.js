//익스프레스 설정
const express = require('express')
const app = express()
const port = 5000

//쿠키
const cookieParser = require('cookie-parser')

//config에 있는 몽고디비 정보
const config = require('./config/key')

//몽고디비 연결
const mongoose = require('mongoose')
mongoose.connect (config.monggoURI)
.then( () => console.log('MongoDB Connected…'))
.catch(err => console.log(err))

//json 데이터 가져오기 설정
//express 4.0이상 부터는 body-parser 없이 데이터를 가져올수있다.
app.use(express.json());
//쿠기 사용하기위한 설정
app.use(cookieParser())


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//user
app.use('/api/user', require('./routes/user'));

//video
app.use('/api/video', require('./routes/video'));




