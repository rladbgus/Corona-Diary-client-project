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
  console.log(MenuState);

  return (
    <Header>
      <img className="logo" src={maakImg} alt="logo" onClick={() => { window.location.href = 'http://localhost:3000' }} />

      <button className="search_btn" onClick={() => { window.location.href = 'http://localhost:3000/Search' }}>검색</button>

      <button className="menus" onClick={() => { setIsMenuOpen(!MenuState) }}>≡</button>
      <ul className={MenuState ? "open" : "close"}>
        <li>
          <NavLink exact to="/user/login" activeClassName="selected">
            로그인
            </NavLink>
        </li>
        <li>
          <NavLink to="/user/signup" activeClassName="selected">
            회원가입
            </NavLink>
        </li>
      </ul>
    </Header>
  );
}

export default Nav;
