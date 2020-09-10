import React, { useState } from "react";
import EditWritingForm from "../Edit/EditWritingForm";
import EditSurvey from "../Edit/EditSurvey";
import EditSubmitButton from "../Edit/EditSubmitButton";

const EditWritingPageForm = ({ history, content }) => {
  const [data, getData] = useState({
    covid_date: content.covid_date,
    q_appet: content.q_appet,
    q_cough: content.q_cough,
    q_fatigue: content.q_fatigue,
    q_psy: content.q_psy,
    q_resp: content.q_resp,
    q_temp: content.q_temp,
    q_sleep: content.q_sleep,
    referenceFile: content.referenceFile,
    text: content.text,
    title: content.title,
    tag: content.tag,
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
      <EditWritingForm
        handleChange={handleChange}
        handleTags={handleTags}
        handleImg={handleImg}
        content={content}
      />
      <EditSurvey
        handleClick={handleClick}
        handleNumberChange={handleNumberChange}
        content={content}
      />
      <EditSubmitButton data={data} history={history} image={image} />
    </>
  );
};

export default EditWritingPageForm;
