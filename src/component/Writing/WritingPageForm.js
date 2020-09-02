import React, { useState } from "react";
import styled from "styled-components";
import WritingForm from "./WritingForm";
import Survey from "./Survey";
import SubmitButton from "./SubmitButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const WritingPageForm = ({ history }) => {
  const [data, getData] = useState({
    referenceFile: "file",
  });

  const handleClick = (name, value) => {
    getData({
      ...data,
      [name]: Number(value),
    });
  };

  const handleChange = event => {
    getData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleNumberChange = event => {
    getData({
      ...data,
      [event.target.name]: Number(event.target.value),
    });
  };

  return (
    <>
      <WritingForm handleChange={handleChange} />
      <Survey
        handleClick={handleClick}
        handleNumberChange={handleNumberChange}
      />
      <SubmitButton data={data} history={history} />
    </>
  );
};

export default WritingPageForm;
