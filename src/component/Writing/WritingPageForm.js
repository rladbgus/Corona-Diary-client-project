import React, { useState } from "react";
import WritingForm from "./WritingForm";
import Survey from "./Survey";
import SubmitButton from "./SubmitButton";

const WritingPageForm = ({ history }) => {
  const [data, getData] = useState({
    tags: [],
  });
  const [image, getImage] = useState("");

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

  const handleImg = img => {
    getImage(img);
  };

  return (
    <>
      <WritingForm
        handleChange={handleChange}
        handleTags={handleTags}
        handleImg={handleImg}
      />
      <Survey
        handleClick={handleClick}
        handleNumberChange={handleNumberChange}
      />
      <SubmitButton data={data} history={history} image={image} />
    </>
  );
};

export default WritingPageForm;
