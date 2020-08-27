import React from "react";
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

const SurveyForm = ({ data }) => {
  return (
    <>
      <Container>
        <div>{data.data}</div>
        <SurveyContainer>
          <span>
            약1
            <div>
              <input type="radio" name={`question${data.id}`} value="1" />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input type="radio" name={`question${data.id}`} value="2" />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input type="radio" name={`question${data.id}`} value="3" />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input type="radio" name={`question${data.id}`} value="4" />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input type="radio" name={`question${data.id}`} value="5" />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input type="radio" name={`question${data.id}`} value="6" />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input type="radio" name={`question${data.id}`} value="7" />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input type="radio" name={`question${data.id}`} value="8" />
            </div>
          </span>
          <span>
            <br></br>
            <div>
              <input type="radio" name={`question${data.id}`} value="9" />
            </div>
          </span>
          <span>
            강10
            <div>
              <input type="radio" name={`question${data.id}`} value="10" />
            </div>
          </span>
        </SurveyContainer>
      </Container>
    </>
  );
};

export default SurveyForm;
