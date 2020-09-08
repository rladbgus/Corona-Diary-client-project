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

const Like = ({ dataCount, dataLike, data }) => {
  console.log(data)
  // console.log(dataLike);
  // console.log(dataCount);
  return (
    <>
      안녕하세요
    </>
  );
};

export default Like;
