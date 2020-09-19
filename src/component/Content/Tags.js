import React from "react";
import styled from "styled-components";

const Tags = ({ data }) => {
  return (
    <TagStyle>
      {data.length === 0
        ? ""
        : data.map((list) => <span key={list.id}>{`#${list.tag} `}</span>)}
    </TagStyle>
  );
};

export default Tags;

const TagStyle = styled.div`
  span {
    display: inline-block;
    margin: 1%;
    background: #ffffff;
    color: #4caf50;
    border-radius: 10px;
  }
`;
