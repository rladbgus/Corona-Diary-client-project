import React from "react";
import styled from "styled-components";

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const HomeFooterViewStyle = styled.div`
  background: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  text-align: center;
  line-height: 30px;
  position: relative;
  font-family: "S-CoreDream-3Light";
  font-weight: normal;
  font-style: normal;
  line-height: 180%;

  .homeFooterView {
    position: relative;
    padding: 30px 60px;
    @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
      font-size: 17px;
      line-height: 25px;
      a {
        display: none;
      }
    }
  }
  .homeFooterdiv {
    color: #ffffff;
    display: inline-block;
    margin: 10px 20px;
    width: 300px;
  }

  span {
    /* background: #455a64; */
  }

  .homeFooterCopyright {
    border-top: 3px solid white;
    color: #ffffff;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    /* background: #455a64; */
  }

  a:hover {
    color: #00ce56;
  }

  .eachController {
    display: block;
  }
`;

const HomeFooterView = () => {
  return (
    <HomeFooterViewStyle>
      <div className="homeFooterView">
        <div className="homeFooterdiv">
          <span className="eachController">고건우</span>
          <span className="eachController">
            Team Leader <br /> Full-Stack
          </span>
          <a
            href="mailto:kkw722@gmail.com"
            title="Send email"
            className="eachController"
          >
            kkw722@gmail.com
          </a>
          <a
            href="https://github.com/gunwooko"
            className="eachController"
            target="_blank"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://velog.io/@gunwooko/"
            className="eachController"
            target="_blank"
          >
            Blog
          </a>
        </div>
        <div className="homeFooterdiv">
          <span className="eachController">김유현</span>
          <span className="eachController">
            Team member <br /> Front-End
          </span>
          <a
            href="mailto:cocokiuuu1858@gmail.com"
            title="Send email"
            className="eachController"
          >
            cocokiuuu1858@gmail.com
          </a>
          <a
            href="https://github.com/rladbgus"
            className="eachController"
            target="_blank"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://yoohyeon.tistory.com/"
            className="eachController"
            target="_blank"
          >
            Blog
          </a>
        </div>
        <div className="homeFooterdiv">
          <span className="eachController">손명균</span>
          <span className="eachController">
            Team member <br /> Front-End
          </span>
          <a
            href="mailto:sonmg90@gmail.com"
            title="Send email"
            className="eachController"
          >
            sonmg90@gmail.com
          </a>
          <a
            href="https://github.com/Myunggyun"
            className="eachController"
            target="_blank"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://mr-son.tistory.com/"
            className="eachController"
            target="_blank"
          >
            Blog
          </a>
        </div>
        <div className="homeFooterdiv">
          <span className="eachController">신우현</span>
          <span className="eachController">
            Team member <br /> Back-End
          </span>
          <a
            href="mailto:shinuhyun@gmail.com"
            title="Send email"
            className="eachController"
          >
            shinuhyun@gmail.com
          </a>
          <a
            href="https://github.com/shinuhyun"
            className="eachController"
            target="_blank"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://shinuhyun.tistory.com/"
            className="eachController"
            target="_blank"
          >
            Blog
          </a>
        </div>
        <div className="homeFooterCopyright">&copy; 2020 · C-Lab</div>
      </div>
    </HomeFooterViewStyle>
  );
};

export default HomeFooterView;
