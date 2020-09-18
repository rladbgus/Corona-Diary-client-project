import React, { useState} from "react";
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

  const initOption = value => {
    if (modal === false) {
      for (let i = 0; i < value.length; i++) {
        if (value[i].checked) {
          value[i].checked = false;
        }
      }
    }
  };

  return (
    <Container>
      <button onClick={openModal}>설문조사</button>
      <SurveyModal
        visible={modal}
        onClose={closeModal}
        handleData={handleData}
        initOption={initOption}
      >
        <h3 title="survey">설문조사</h3>
        <div className="survey-text">
          <label>
            코로나에 걸린지{" "}
            <input
              name="covid_date"
              className="input_since"
              type="text"
              onChange={handleNumberChange}
            />{" "}
            일 되었습니다.
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
            initOption={initOption}
          />
        ))}
      </SurveyModal>
    </Container>
  );
};

export default Survey;

const Container = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    background: black;
    color: white;
    border: none;
    position: relative;
    height: 3rem;
    width: 14.6rem;
    font-size: 1.25em;
    padding: 0 1.2em;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
  }
  button:hover {
    background: #fff;
    color: #1aab8a;
  }
  button:before,
  button:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
  }
  button:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  button:hover:before,
  button:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;
