import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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

const EditSurveyForm = ({ data, handleClick, name }) => {
  let splitUrl = window.location.href.split("/");
  let contentId = splitUrl[4];
  const getToken = window.sessionStorage.getItem("token");
  const [value, getValue] = useState("");
  const [checkValue1, getCheckValue1] = useState(false);
  const [checkValue2, getCheckValue2] = useState(false);
  const [checkValue3, getCheckValue3] = useState(false);
  const [checkValue4, getCheckValue4] = useState(false);
  const [checkValue5, getCheckValue5] = useState(false);
  const [checkValue6, getCheckValue6] = useState(false);
  const [checkValue7, getCheckValue7] = useState(false);
  const [checkValue8, getCheckValue8] = useState(false);
  const [checkValue9, getCheckValue9] = useState(false);
  const [checkValue10, getCheckValue10] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    axios
      .get(`http://localhost:5000/content/${contentId}`, {
        headers: { "x-access-token": getToken },
      })
      .then(res => {
        getValue(res.data.contentDetail[name]);
      });
  }, []);

  console.log(value);

  const handleOption = () => {
    if (value === 1) {
      getCheckValue1(true);
    }
    if (value === 2) {
      getCheckValue2(true);
    }
    if (value === 3) {
      getCheckValue3(true);
    }
    if (value === 4) {
      getCheckValue4(true);
    }
    if (value === 5) {
      getCheckValue5(true);
    }
    if (value === 6) {
      getCheckValue6(true);
    }
    if (value === 7) {
      getCheckValue7(true);
    }
    if (value === 8) {
      getCheckValue8(true);
    }
    if (value === 9) {
      getCheckValue9(true);
    }
    if (value === 10) {
      getCheckValue10(true);
    }
  };

  return (
    <>
      <Container>
        <div className={data.name}>{data.data}</div>
        <SurveyContainer>
          <span>
            약1
            <div>
              <input
                defaultChecked={checkValue1}
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
                defaultChecked={checkValue2}
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
                defaultChecked={checkValue3}
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
                defaultChecked={checkValue4}
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
                defaultChecked={checkValue5}
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
                defaultChecked={checkValue6}
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
                defaultChecked={checkValue7}
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
                defaultChecked={checkValue8}
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
                defaultChecked={checkValue9}
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
                defaultChecked={checkValue10}
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
