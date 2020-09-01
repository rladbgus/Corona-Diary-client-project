import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import getLogin from "../../Context/Context";

const Login = (props) => {
    const value = useContext(getLogin);
    if (value.handleLogin === true) {
        alert("로그인 상태입니다")
        props.history.push('/')
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/user/login",
            {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    alert('로그인에 성공하셨습니다');
                    value.handleLogin();
                    props.history.push('/')
                } else if (res.status === 409) {
                    alert('아이디,비밀번호를 확인해주세요')
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <center className="loginName" >
            <h1>로그인</h1>
            <form>
                <div>
                    <label>이메일</label>
                    <input type="email" value={email} onChange={emailHandler} />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" value={password} onChange={passwordHandler} />
                </div>
                <button onClick={submitHandler}>확인</button>
            </form>
        </center>
    );
};

export default withRouter(Login);