import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Navbar from './components/views/NavBar/Navbar'
import VideoUploadPage from "./components/views/VideoUploadPage/VideoUploadPage";
import Auth from './hoc/auth'



// null 아무나
// false 로그인 안 한사람
// true 로그인 한사람
function App() {
  return (
    
    <Router>
      <Navbar/>
      {/* <Navbar/> */}
      <Switch>

        {/* 메인페이지 */}
        <Route exact path='/' component={Auth(LandingPage, null)} />

        {/* 로그인페이지 */}
        <Route path='/login' component={Auth(LoginPage, false)} />

        {/* 회원가입 */}
        <Route path='/register' component={Auth(RegisterPage, false) } />

        {/* 비디오업로드 */}
        <Route path='/videoUploadPage' component={Auth(VideoUploadPage, true) } />
        

        

      </Switch>
    </Router>
  );
}

export default App;
