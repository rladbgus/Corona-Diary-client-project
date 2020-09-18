import React, { useState } from "react";
import WritingForm from "./WritingForm";
import Survey from "./Survey";
import SubmitButton from "./SubmitButton";

const WritingPageForm = ({ history }) => {
  const [data, getData] = useState({
    tags: [],
    q_temp: 0,
    q_resp: 0,
    q_cough: 0,
    q_appet: 0,
    q_sleep: 0,
    q_fatigue: 0,
    q_psy: 0,
    covid_date: 0,
  });

  const [image, getImage] = useState("");

  const handleData = () => {
    data.q_temp = 0;
    data.q_resp = 0;
    data.q_cough = 0;
    data.q_appet = 0;
    data.q_sleep = 0;
    data.q_fatigue = 0;
    data.q_psy = 0;
    data.covid_date = 0;
  };

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
        handleData={handleData}
      />
      <SubmitButton data={data} history={history} image={image} />
    </>
  );
};

export default WritingPageForm;
