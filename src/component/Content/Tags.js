import React from "react";
// import styled from "styled-components";
// import axios from "axios";

const Tags = ({ data }) => {
  return (
    <>
      {data.length === 0
        ? ""
        : data.map(list => <span key={list.id}>{`#${list.tag} `}</span>)}
    </>
  );
};

export default Tags;
