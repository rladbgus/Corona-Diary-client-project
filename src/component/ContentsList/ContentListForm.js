import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Content = styled.span`
  flex-wrap: wrap;
  background: #ffffff;
  border-style: solid 2px #66bb6a;
  margin: 5px;

  .contentLinkStyle {
    /* display:-webkit-box;  */
    /* height: 20em; */
    word-wrap:break-word; 
    -webkit-line-clamp:6; 
    -webkit-box-orient:vertical; 
    overflow:hidden; 
    text-overflow:ellipsis; 
    line-height:2em; 
    color:#444; 
    text-decoration:none;
    }
`;

const ContentsListForm = ({ data }) => {
  return (
    <Content>
      <Link to={`/content/${data.id}`} className="contentLinkStyle">
        <div>{data.title}</div>
        <div>{data.text}</div>
        <div>{data.createdAt}</div>
      </Link>
    </Content>
  );
};

export default ContentsListForm;