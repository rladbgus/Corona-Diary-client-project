import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import getLogin from "../../Context/Context";
import { GoogleLogin } from 'react-google-login';

const Login = (props) => {
    const value = useContext(getLogin);

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
                    alert('로그인에 성공했습니다');
                    value.handleLogin();
                    value.handleToken(res.data.token);
                    props.history.push('/')
                }
                // else if (res.status === 409) {
                //     alert('아이디,비밀번호를 확인해주세요')
                // }
            })
            .catch(err => {
                console.log(err)
                alert('아이디,비밀번호를 확인해주세요')
            })
    }
    // const onSignIn = (googleUser) => {
    //     var profile = googleUser.getBasicProfile();
    //     console.log('ID: ' + profile.getId());
    //     console.log('Name: ' + profile.getName());
    //     console.log('Image URL: ' + profile.getImageUrl());
    //     console.log('Email: ' + profile.getEmail());
    // }

    return (
        <center className="loginName" >
            {/* <script src="https://apis.google.com/js/platform.js" async defer></script>
            <meta name="google-signin-client_id" content="333133070398-amgnp101osuduqvjn2vacf3p20j2kmgn.apps.googleusercontent.com"></meta> */}

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
                {/* <button className="g-signin2" onClick={onSignIn}>Google Login</button> */}

                <div>
                    <GoogleLogin
                        clientId="333133070398-amgnp101osuduqvjn2vacf3p20j2kmgn.apps.googleusercontent.com"
                        onSuccess={(res) => {
                            // console.log(res);
                            value.handleLogin();
                            value.handleGoogleToken(res.accessToken)
                            alert('로그인에 성공했습니다')
                            props.history.push('/')
                        }}
                        onFailure={(err) => {
                            console.log(err);
                        }}
                    />
                </div>
            </form>
        </center>
    );
};

export default withRouter(Login);