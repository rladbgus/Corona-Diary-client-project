import React, { useState } from "react";
import WritingForm from "./WritingForm";
import Survey from "./Survey";
import SubmitButton from "./SubmitButton";

const WritingPageForm = ({ history }) => {
  const [data, getData] = useState({
    tags: [],
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
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleNumberChange = event => {
    getData({
      ...data,
      [event.target.name]: Number(event.target.value),
    });
  };

  const handleTags = getTags => {
    getData({
      ...data,
      tags: getTags,
    });
  };

  return (
    <>
      <WritingForm handleChange={handleChange} handleTags={handleTags} />
      <Survey
        handleClick={handleClick}
        handleNumberChange={handleNumberChange}
      />
      <SubmitButton data={data} history={history} />
    </>
  );
};

export default WritingPageForm;
