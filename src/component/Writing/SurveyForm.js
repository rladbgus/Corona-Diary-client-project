import React from "react";
import styled from "styled-components";

const SurveyForm = ({ data, handleClick }) => {
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

export default SurveyForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const SurveyContainer = styled.span`
  display: flex;
  flex-direction: row;
  span {
    margin-right: 10px;
  }
`;

const Input = styled.input`
  border: 2px solid red;
`;
