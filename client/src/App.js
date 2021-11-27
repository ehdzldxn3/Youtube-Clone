import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Navbar from './components/views/NavBar/Navbar'
import Auth from './hoc/auth'

function App() {

  //nuull 아무나
  //false 로그인 안한 사람
  //true 로그인 한사람만
  return (
    <Router>
        <Switch>
          {/* 메인페이지 */}
          <Route exact path='/' component={Auth(LandingPage, null)} />
          {/* 로그인페이지 */}
          <Route path='/login' component={Auth(LoginPage, false)} />
          {/*  */}
          <Route path='/register' component={Auth(RegisterPage, false)} />
        </Switch>
        <Navbar/>
    </Router>
    
  );
}

export default App;
