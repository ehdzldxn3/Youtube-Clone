import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Navbar from './components/views/NavBar/Navbar'
import VideoUploadPage from "./components/views/VideoUploadPage/VideoUploadPage";
import Auth from './hoc/auth'



//asdferahsth
function App() {
  return (
    
    <Router>
      {/* <Navbar/> */}
      <Switch>

        {/* 메인페이지 */}
        <Route exact path='/' component={Auth(LandingPage, null)} />

        {/* 로그인페이지 */}
        <Route path='/login' component={Auth(LoginPage, false)} />

        {/*  */}
        <Route path='/register' component={Auth(RegisterPage, false) } />

        <Route path='/register' component={RegisterPage} />

        

      </Switch>
    </Router>
  );
}

export default App;
