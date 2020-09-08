import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Content = styled.div`
  background: #ffac9a;
  border-style: solid 3px;
`;

const ContentsListForm = ({ data }) => {
  console.log(data);
  return (
    <div className="ContentListBox">
      {data.map(list => {
        <Content key={data.id}>
          <Link to={`/content/${list.id}`}>
            <h1>{list.title}</h1>
            <span>{list.createdAt}</span>
            <p>{list.text}</p>
          </Link>
        </Content>;
      })}
    </div>
  );
};

export default ContentsListForm;
