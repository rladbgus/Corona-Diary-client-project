import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const EditSurveyForm = ({ data, handleClick }) => {
  return (
    <>
      <Container>
        <div className={data.name}>{data.data}</div>
        <SurveyContainer>
          <span>
            약1
            <div>
              <input
                type="radio"
                name={`question${data.id}`}
                value="1"
                onClick={e => handleClick(data.name, e.target.value)}
                className="option1"
              />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input
                type="radio"
                name={`question${data.id}`}
                value="2"
                onClick={e => handleClick(data.name, e.target.value)}
                className="option2"
              />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input
                type="radio"
                name={`question${data.id}`}
                value="3"
                onClick={e => handleClick(data.name, e.target.value)}
              />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input
                type="radio"
                name={`question${data.id}`}
                value="4"
                onClick={e => handleClick(data.name, e.target.value)}
              />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input
                type="radio"
                name={`question${data.id}`}
                value="5"
                onClick={e => handleClick(data.name, e.target.value)}
              />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input
                type="radio"
                name={`question${data.id}`}
                value="6"
                onClick={e => handleClick(data.name, e.target.value)}
              />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input
                type="radio"
                name={`question${data.id}`}
                value="7"
                onClick={e => handleClick(data.name, e.target.value)}
              />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input
                type="radio"
                name={`question${data.id}`}
                value="8"
                onClick={e => handleClick(data.name, e.target.value)}
              />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input
                type="radio"
                name={`question${data.id}`}
                value="9"
                onClick={e => handleClick(data.name, e.target.value)}
                className="9"
              />
            </div>
          </span>
          <span>
            강10
            <div>
              <input
                type="radio"
                name={`question${data.id}`}
                value="10"
                onClick={e => handleClick(data.name, e.target.value)}
              />
            </div>
          </span>
        </SurveyContainer>
      </Container>
    </>
  );
};

export default EditSurveyForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-left: 20px;
`;

const SurveyContainer = styled.span`
  display: flex;
  flex-direction: row;
  .question {
    font-size: 20px;
  }
  div {
    margin-bottom: 7px;
  }
  span {
    margin-right: 10px;
  }
`;
