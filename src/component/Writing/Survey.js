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

const Survey = ({ handleClick, handleNumberChange }) => {
  return (
    <>
      <Container>
        <div title="signup">설문조사</div>
        <div>
          <label>코로나걸린시기</label>
          <input
            name="covid_date"
            className="input_since"
            type="text"
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <label>질문1: 현재 체온은 어떠신가요?</label>
          <input
            name="q_temp"
            className="input_temperature"
            type="text"
            onChange={handleNumberChange}
          />
        </div>
        {surveydata.map(list => (
          <SurveyForm data={list} key={list.id} handleClick={handleClick} />
        ))}
      </Container>
    </>
  );
};

export default Survey;
