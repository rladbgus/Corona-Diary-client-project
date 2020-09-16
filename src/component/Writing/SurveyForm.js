import React from "react";
import styled from "styled-components";

const SurveyForm = ({ data, handleClick, checking }) => {
  return (
    <Container>
      <div className={data.name} className="question">
        {data.data}
      </div>
      <SurveyContainer>
        <span>
          나쁨
          <div>
            <input
              type="radio"
              name={`question${data.id}`}
              value="1"
              onClick={e => handleClick(data.name, e.target.value)}
              defaultChecked={checking}
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
              defaultChecked={checking}
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
              defaultChecked={checking}
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
              defaultChecked={checking}
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
              defaultChecked={checking}
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
              defaultChecked={checking}
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
              defaultChecked={checking}
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
              defaultChecked={checking}
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
              defaultChecked={checking}
            />
          </div>
        </span>
        <span>
          좋음
          <div>
            <input
              type="radio"
              name={`question${data.id}`}
              value="10"
              onClick={e => handleClick(data.name, e.target.value)}
              defaultChecked={checking}
            />
          </div>
        </span>
      </SurveyContainer>
    </Container>
  );
};

export default SurveyForm;

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
    margin-bottom: 9px;
  }
  span {
    margin-right: 14px;
    font-size: 0.7rem;
  }
`;

