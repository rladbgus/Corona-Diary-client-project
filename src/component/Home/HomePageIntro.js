import React from "react";
import styled from "styled-components";

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const HomeIntroStyle = styled.div`
  background: #f5f5f5;
  display: flex;
  height: 340px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 5px;
  text-align: left;
  line-height: 100px;

  .homeIntroTitle {
    position: relative;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 15px;
    padding-left: 85px;
    @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
      font-size: 27px;
      font-weight: 500;
      letter-spacing: 15px;
      padding-left: 45px;
    }
  }

  .homeIntroDescription {
    line-height: 30px;
    padding-left: 35px;
    font-size: 35px;
    letter-spacing: 10px;
    @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
      line-height: 7px;
      padding-left: 0px;
      font-size: 23px;
      letter-spacing: 1px;
    }
  }

  span {
    display: block;
    width: 680px;
    height: 30px;
    margin: 25px 0px 20px 50px;
  }
`;

const HomePageIntro = () => {
  return (
    <HomeIntroStyle>
      <div>
        <div className="homeIntroDescription">
          <span>소통을 통해,</span>
          <span>공감대를 형성하고,</span>
          <span>더 나아가 빠른 회복을 위한 일기,</span>
        </div>
        <div className="homeIntroTitle">Corona Diary</div>
      </div>
    </HomeIntroStyle>
  );
};

export default HomePageIntro;
