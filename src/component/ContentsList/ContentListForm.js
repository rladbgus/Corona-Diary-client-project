import styled from "styled-components";
import React from "react";

const Content = styled.div`
  background: #ffac9a;
  border-style: solid 3px;
  margin: 5px;
`;

const ContentsListForm = ({ data }) => {
  return (
    <Content>
      <div>{data.title}</div>
      <div>{data.text}</div>
      <div>{data.createdAt}</div>
    </Content>
  );
};

export default ContentsListForm;
