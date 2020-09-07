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

const Tags = ({ data }) => {
  console.log(data[0]);

  return (
    <>
      {data.length === 0
        ? ""
        : data.map(list => <span key={list.id}>{`#${list.tag} `}</span>)}
    </>
  );
};

export default Tags;
