import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import maakImg from "../../img/mask.jpg"

const Header = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #cbe0e7;
  border: 0px;
  border-radius: 0, 0, 10px, 10px;
  height: 50px;

  button {
    float: right;
  }

  .menus {
    margin: 12px;
  }

  .search_btn {
    margin: 10px;
  }

  .open{
  background-color: #F8EC7F;
  float: right;
}

.close{
  display: none;
}

.logo {
  width: 40px;
  height: 40px;
  margin: 5px 0px 0px 10px;
}

`;

function Nav() {

  const [MenuState, setIsMenuOpen] = useState(false);

  // 테스트 위해 임의로 로그인상태 지정
  // 로그인상태
  const [loginState, setIsLoginOpen] = useState(true);

  return (
    <Header>
      {/* 로고 */}
      <img className="logo" src={maakImg} alt="logo" onClick={() => { window.location.href = 'http://localhost:3000' }} />

      {/* 검색버튼 */}
      <button className="search_btn" onClick={() => { window.location.href = 'http://localhost:3000/Search' }}>검색</button>

      {/* 햄버거버튼 */}
      <button className="menus" onClick={() => { setIsMenuOpen(!MenuState) }}>≡</button>
      {/* 로그인 전 내용 */}
      <span className="logoutstate"
        style={loginState ? { display: 'none' } : { display: 'block' }}>
        <ul className={MenuState ? "open" : "close"}>
          <li>
            <NavLink exact to="/user/login" className="selected">
              로그인
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/signup" className="selected">
              회원가입
            </NavLink>
          </li>
        </ul>
      </span>

      {/* 로그인 후 내용 */}
      <span className="loginstate"
        style={loginState ? { display: 'block' } : { display: 'none' }} >
        <ul className={MenuState ? "open" : "close"}>
          <li>
            <NavLink exact to="/writing" className="selected">
              일기쓰기
            </NavLink>
          </li>
          <li>
            <NavLink to="/mypage" className="selected">
              회원정보
            </NavLink>
          </li>
          <li>
            <NavLink to="/mycontentslist" className="selected">
              내가 쓴 글 보기
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="selected">
              로그아웃
            </NavLink>
          </li>
        </ul>
      </span>
    </Header>
  );
}

export default Nav;
