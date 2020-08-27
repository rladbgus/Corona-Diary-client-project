import React, { Fragment } from "react";
import Nav from "../component/Nav/Nav"
import styled from "styled-components";
import LoginView from "../component/Login/Login";

const Shift = styled.div`
  margin-top: 100px;
`;

const Login = () => {
  return (
    <div>
      <Fragment>
        <Nav />
        <Shift />
        <LoginView />
      </Fragment>
    </div>
  )
}

export default Login;







// const [Email, setEmail] = useState("");
// const [Password, setPassword] = useState("");

// const onEmailHandler = (e) => {
//   setEmail(e.currentTaget.value)
// }

// const onPasswordHandler = (e) => {
//   setPassword(e.currentTaget.value)
// }

// <input type="email" value={Email} onChange={onEmailHandler} />
// <label>비밀번호</label>
// <input type="password" value={Password} onChange={onPasswordHandler} />
// <button>확인</button>