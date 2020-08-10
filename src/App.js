import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import MyPage from "./components/MyPage";
import PasswordCheck from "./components/PasswordCheck";
import MyInform from "./components/MyInform";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/mypage" exact={true} component={MyPage} />
      <Route path="/mypage/passwordcheck" component={PasswordCheck} />
      <Route path="/mypage/myinform" component={MyInform} />
    </HashRouter>
  );
}

export default App;
