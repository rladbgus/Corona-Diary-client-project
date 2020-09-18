import React from "react";
import styled from "styled-components";

const SurveyForm = ({ data, handleClick }) => {
  // const [check1, getCheck1] = useState(false);
  // const [check2, getCheck2] = useState(false);
  // const [check3, getCheck3] = useState(false);
  // const [check4, getCheck4] = useState(false);
  // const [check5, getCheck5] = useState(false);
  // const [check6, getCheck6] = useState(false);
  // const [check7, getCheck7] = useState(false);
  // const [check8, getCheck8] = useState(false);
  // const [check9, getCheck9] = useState(false);
  // const [check10, getCheck10] = useState(false);

  // const handleChecking = value => {
  //   console.log(value);
  //   if (value === "1") {
  //     getCheck1(!check1);
  //   }
  //   if (value === "2") {
  //     getCheck2(!check2);
  //   }
  //   if (value === "3") {
  //     getCheck3(!check3);
  //   }
  //   if (value === "4") {
  //     getCheck4(!check4);
  //   }
  //   if (value === "5") {
  //     getCheck5(!check5);
  //   }
  //   if (value === "6") {
  //     getCheck6(!check6);
  //   }
  //   if (value === "7") {
  //     getCheck7(!check7);
  //   }
  //   if (value === "8") {
  //     getCheck8(!check8);
  //   }
  //   if (value === "9") {
  //     getCheck9(!check9);
  //   }
  //   if (value === "10") {
  //     getCheck10(!check10);
  //   }
  // };

  return (
    <Container>
      <div className={data.name} className="question">
        {data.data}
      </div>
      <SurveyContainer onSubmit={e => e.preventDefault()} id="initial">
        <span>
          나쁨
          <div>
            <input
              type="radio"
              name={`question${data.id}`}
              value="1"
              onClick={e => handleClick(data.name, e.target.value)}
              // onChange={e => handleChecking(e.target.value)}
              // checked={check1}
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
              // onChange={e => handleChecking(e.target.value)}
              // checked={check2}
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
              // onChange={e => handleChecking(e.target.value)}
              // checked={check3}
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
              // onChange={e => handleChecking(e.target.value)}
              // checked={check4}
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
              // onChange={e => handleChecking(e.target.value)}
              // checked={check5}
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
              // onChange={e => handleChecking(e.target.value)}
              // checked={check6}
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
              // onChange={e => handleChecking(e.target.value)}
              // checked={check7}
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
              // onChange={e => handleChecking(e.target.value)}
              // checked={check8}
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
              // onChange={e => handleChecking(e.target.value)}
              // checked={check9}
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
              // onChange={e => handleChecking(e.target.value)}
              // checked={check10}
            />
          </div>
        </span>
        {/* <button id="initial11" onClick={cancelCourse}>
          <input type="reset" name={`question${data.id}`} />
        </button> */}
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

const SurveyContainer = styled.form`
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
  .initial {
  }
`;
