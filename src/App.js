import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import SignUp from "./page/SignUp";
import Content from "./page/Content";
import ContentsList from "./page/ContentsList";
import MyPage from "./page/MyPage";
import Login from "./page/Login";
import Writing from "./page/Writing";
import Search from "./page/Search";
import SettingInfo from "./page/SettingInfo";
import MyContentsList from "./page/MyContentsList";
import LoginProvider from "./Context/ContextProvider";
import SocialSignUpPage from "./page/SocialSignUp";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/user/signup" component={SignUp}></Route>
          <Route path="/content" component={Content}></Route>
          <Route path="/contentslist" component={ContentsList}></Route>
          <Route path="/mypage" component={MyPage}></Route>
          <Route path="/user/login" component={Login}></Route>
          <Route path="/writing" component={Writing}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/settinginfo" component={SettingInfo}></Route>
          <Route path="/mycontentslist" component={MyContentsList}></Route>
          <Route path="/user/sociallogin" component={SocialSignUpPage}></Route>
        </Switch>
      </LoginProvider>
    </div>
  );
}

export default App;
