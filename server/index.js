//익스프레스 설정
const express = require('express')
const app = express()
const port = 5000



//임포트#######



//쿠키
const cookieParser = require('cookie-parser')

//config에 있는 몽고디비 정보
const config = require('./config/key')
//user
const {User} = require('./models/User')
//auth
const {auth} = require('./middleware/auth')


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


//test
app.get('/api/hello', (req, res) => {
  res.send('Hello World!')
})

//signUp
app.post('/api/user/signUp', (req, res) => {
  //회원가입 필요한 정보 가져와서 DB에 저장한다
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if(err) return res.json({success: false})
    return res.status(200).json({
      success: true
    })
  })
})

//Login
app.post('/api/user/login', (req, res) => {
  //요청된 email DB 찾는다.
  User.findOne({email: req.body.email}, (err, user) => {
    if(!user){
      return res.json({
        loginSuccess: false,
        msg: '존재하지 않는 계정입니다.'
      })
    }
    //요청된 이메일이 DB에 있다면 비밀번호가 맞는지 확인
    user.comparePW(req.body.password, function (err, isMatch) {
      if(!isMatch)
      return res.json({loginSuccess:false, message: '비밀번호가 틀렸습니다.'})
      //비밀번호까지 맞다면 토큰을 생성한다.
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err)
        //user데이터를 x_auth라는 이름의 쿠키로 내보낸다. 
        //저장한다. 로컬스토리지 / 쿠키 / 세션
        res.cookie("x_auth", user.token)
        .status(200)
        .json({loginSuccess:true, userId: user._id})
      })
    })
  })
})
//req(요청) 객체, res(응답

//Auth
app.get('/api/user/auth', auth, (req, res) => {
  //여기까지 미들웨어를 통과해 왔다는 이야기는 
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

//Logout
app.get('/api/user/logout', auth, (req, res) => {

  User.findOneAndUpdate({_id: req.user._id},
    {token: ""},
    (err, user) => {
      if (err) return res.json({success:false, err})
      return res.status(200).send({
        success: true
      })
    })
})


