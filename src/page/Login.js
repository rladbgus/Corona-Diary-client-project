import React from "react";
import Nav from "../component/Nav/Nav"

const Login = () => {

  return (
    <div>
      <Nav></Nav>
      <center className="loginName" style={{
        margin: '100px', border: '1px solid gray', padding: '10px 30px 40px 30px', width: '1200px'
      }} >
        <h1>로그인</h1>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <label>이메일</label>
          <input type="email" />
          <label>비밀번호</label>
          <input type="password" />
          <button>확인</button>
        </form>
      </center>
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