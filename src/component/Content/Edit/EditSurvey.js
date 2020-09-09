import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EditSurveyForm from "./EditSurveyForm";
import { surveydata } from "../../Writing/surveydata";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const EditSurvey = ({ handleClick, handleNumberChange, content }) => {
  const [data, getData] = useState("");
  useEffect(() => {
    getData(content);
  });
  return (
    <>
      <Container>
        <div title="signup">설문조사</div>
        <div>
          <label>코로나걸린시기</label>
          <input
            defaultValue={data.covid_date}
            name="covid_date"
            className="input_since"
            type="text"
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <label>질문1: 현재 체온은 어떠신가요?</label>
          <input
            defaultValue={data.q_temp}
            name="q_temp"
            className="input_temperature"
            type="text"
            onChange={handleNumberChange}
          />
        </div>
        {surveydata.map(list => (
          <EditSurveyForm
            data={list}
            key={list.id}
            handleClick={handleClick}
            name={list.name}
            check1={true}
            check2={false}
          />
        ))}
      </Container>
    </>
  );
};

export default EditSurvey;
