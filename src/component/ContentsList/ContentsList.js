import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const Contentlist = styled.div`
  background: #FFAC9A;
  display: inline-block;
`;

const ContentsListView = () => {
    return (
        <center className="ContentsList">
            <div className="SerchInput">
                <input type="text" placeholder="검색어를 입력하시오" ></input>
            </div>
            <div className="ContentListBox">
                <Contentlist>
                    <span>제목</span>
                    <p>내용일부</p>
                </Contentlist>
                <Contentlist>
                    <span>제목</span>
                    <p>내용일부</p>
                </Contentlist>
            </div>
        </center>
    );
};

export default ContentsListView;