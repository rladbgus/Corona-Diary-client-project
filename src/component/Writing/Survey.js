import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import SurveyForm from "./SurveyForm";
import { surveydata } from "./surveydata";
import SurveyModal from "../../Modal/SurveyModal";

const Survey = ({ handleClick, handleNumberChange, handleData }) => {
  const [modal, getModal] = useState(false);

  const openModal = () => {
    getModal(true);
  };

  const closeModal = () => {
    getModal(false);
  };

  return (
    <Container>
      <button onClick={openModal}>설문조사</button>
      <SurveyModal visible={modal} onClose={closeModal} handleData={handleData}>
        <h3 title="survey">설문조사</h3>
        <div className="survey-text">
          <label>
            코로나걸린시기{" "}
            <input
              name="covid_date"
              className="input_since"
              type="text"
              onChange={handleNumberChange}
            />{" "}
            입니다.
          </label>
        </div>
        <div className="survey-text">
          <label>
            현재 체온은{" "}
            <input
              name="q_temp"
              className="input_temperature"
              type="text"
              onChange={handleNumberChange}
            />{" "}
            도 입니다.
          </label>
        </div>
        {surveydata.map(list => (
          <SurveyForm
            data={list}
            key={list.id}
            handleClick={handleClick}
            checking={false}
          />
        ))}
      </SurveyModal>
    </Container>
  );
};

export default Survey;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 0;
    padding: 10px;
    align-self: center;
    font-size: 15px;
    font-weight: bold;
    color: rgba(255, 255, 255);
    border: 0;
    border-radius: 5px;
    background: rgba(0, 124, 255, 0.5);
    width: 100px;
    text-align: center;
    transition: all 0.7s ease-out;
    background-position: 1% 50%;
    background-size: 300% 300%;
  }

  button:hover {
    color: rgba(0, 0, 0);
    background: #00ce56;
  }
`;
