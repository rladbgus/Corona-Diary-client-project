import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Content = styled.div`
  background: #ffac9a;
  border-style: solid 3px;
  margin: 5px;
`;

const ContentsListForm = ({ data }) => {
  return (
    <Content>
      <Link to={`/content/${data.id}`}>
        <div>{data.title}</div>
        <div>{data.text}</div>
        <div>{data.createdAt}</div>
      </Link>
    </Content>
  );
};

export default ContentsListForm;
