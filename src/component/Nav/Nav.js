import React, { useState, useContext } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import logo from "../../img/corona_logo.png";
import getLogin from "../../Context/Context";
import AlertModal from "../../Modal/AlertModal";

// advanced:마우스를 소개글 위로 가져가면, 색이 변화되는 애니메이션 동작 추가

const Header = styled.div`
  background-color: #f5f5f5;
  height: 6vh;
  display: flex;
  flex-direction: row;
  padding-top: 20px;

  .logo {
    width: 50px;
    height: 50px;
  }

  button {
    background: #f5f5f5;
    position: absolute;
    width: 50px;
    height: 50px;
    float: right;
    right: 1px;
    border: 0;
  }

  button:hover {
    background: #eeeeee;
  }

  .search_btn {
    position: absolute;
    float: right;
    right: 70px;
    text-align: center;
    padding: 8px 8px;
    width: 70px;
    height: 35px;
    color: black;
  }

  .search_btn:hover {
    color: #00ce56;
    font-weight: bold;
  }

  ul {
    display: block;
  }

  span {
    display: block;
  }

  .open {
    display: block;
    background: white;
    list-style: none;
    position: absolute;
    margin-top: 60px;
    right: 1px;
    text-align: left;
    line-height: 30px;
    padding: 10px 10px 10px 10px;
  }

  li {
    padding: 15px 20px;
  }

  li:hover {
    background: #eeeeee;
  }

  .selected {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  .selected:hover {
    font-weight: bold;
  }

  .close {
    display: none;
  }
  .homelink {
    color: #00ce56;
  }
`;

function Nav() {
  const [MenuState, setIsMenuOpen] = useState(false);
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  const value = useContext(getLogin);

  return (
    <Header>
      {/* 로고 */}
      <Link to="/" className="homelink">
        <i class="fab fa-cuttlefish fa-2x"></i>
      </Link>

      {/* 검색버튼 */}
      <Link to="/Search" className="search_btn">
        <i class="fas fa-search fa-2x"></i>
      </Link>
      <div>
        {/* 햄버거버튼 */}
        <button
          className="menus"
          onClick={() => {
            setIsMenuOpen(!MenuState);
          }}
        >
          <i class="fas fa-bars fa-2x"></i>
        </button>
        {/* 로그인 전 내용 */}
        <span
          className="logoutstate"
          style={value.isLogin ? { display: "none" } : { display: "block" }}
        >
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
        <span
          className="loginstate"
          style={value.isLogin ? { display: "block" } : { display: "none" }}
        >
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
              <div
                className="selected"
                onClick={() => {
                  getChildren("로그아웃 되었습니다:)");
                  getClassName("logout");
                  openModal();
                  value.handleLogin();
                  value.handleToken("");
                }}
              >
                로그아웃
              </div>
            </li>
          </ul>
        </span>
      </div>
      <AlertModal visible={modal} onClose={closeModal} className={className}>
        {children}
      </AlertModal>
    </Header>
  );
}

export default Nav;
