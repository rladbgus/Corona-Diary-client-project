import React from "react";
import styled from "styled-components";

const HomeIntroStyle = styled.div`
  background: #dbf3c2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  line-height: 30px;
`;

const HomePageIntro = () => {
  return (
    <HomeIntroStyle>
      <div>
        <div className="homeIntroTitle">코로나 일기</div>
        <div className="homeIntroDescription">
          소통을 통해, 공감대를 형성하고, 더 나아가 빠른 회복을 위한 일기
        </div>
      </div>
    </HomeIntroStyle>
  );
};

export default HomePageIntro;
