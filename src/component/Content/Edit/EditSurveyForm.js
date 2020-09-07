import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
`;

const EditSurveyForm = ({ data, handleClick, value }) => {
  const [checkValue, getCheckValue] = useState(false);

  useEffect(() => {
    handleLoad();
    console.log(checkValue);
  }, [checkValue]);

  const handleLoad = () => {
    if (value === 1) {
      getCheckValue(true);
    }
    // if (value === 2) {
    // }
    // if (value === 3) {
    // }
    // if (value === 4) {
    // }
    // if (value === 4) {
    // }
    // if (value === 5) {
    // }
    // if (value === 6) {
    // }
    // if (value === 7) {
    // }
    // if (value === 8) {
    // }
    if (value === 9) {
      getCheckValue(true);
    }
    // if (value === 10) {
    // }
  };

  return (
    <>
      <Container>
        <div className={data.name}>{data.data}</div>
        <SurveyContainer onLoad={handleLoad}>
          <span>
            약1
            <div>
              <input
                defaultChecked={checkValue}
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
                defaultChecked={checkValue}
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
