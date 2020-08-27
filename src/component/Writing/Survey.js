import React from "react";
import styled from "styled-components";
import SurveyForm from "./SurveyForm";
import { surveydata } from "./surveydata";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Survey = () => {
  return (
    <>
      <Container>
        <div title="signup">설문조사</div>
        <div>
          <label>코로나걸린시기</label>
          <input className="input_since" type="text" />
        </div>
        <div>
          <label>질문1: 현재 체온은 어떠신가요?</label>
          <input className="input_temperature" type="text" />
        </div>
        {surveydata.map(list => (
          <SurveyForm data={list} key={list.id} />
        ))}
        <form>
          <button type="submit">일기등록</button>
          <button>취소</button>
        </form>
      </Container>
    </>
  );
};

export default Survey;
