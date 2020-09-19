import React, { useState, useContext } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import getLogin from "../../Context/Context";
import AlertModal from "../../Modal/AlertModal";

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
      <Link to="/" className="homelink">
        <i className="fab fa-cuttlefish fa-2x"></i>
      </Link>

      <Link to="/Search" className="search_btn">
        <i className="fas fa-search fa-2x"></i>
      </Link>
      <div>
        <button
          className="menus"
          onClick={() => {
            setIsMenuOpen(!MenuState);
          }}
        >
          <i className="fas fa-bars fa-2x"></i>
        </button>
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
                  value.handleSetNickName("");
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

const Header = styled.div`
  background-color: #f5f5f5;
  height: 6vh;
  display: flex;
  flex-direction: row;
  padding-top: 20px;

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
    color: #4caf50;
  }
`;
