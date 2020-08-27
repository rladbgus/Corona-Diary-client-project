import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginView = () => {
    return (
        <center className="loginName" >
            <h1>로그인</h1>
            <form>
                <div>
                    <label>이메일</label>
                    <input type="email" />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" />
                </div>
                <button>확인</button>
            </form>
        </center>
    );
};

export default LoginView;