import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import getLogin from "../../Context/Context";

const Contentlist = styled.div`
  background: #FFAC9A;
  display: inline-block;
`;

const ContentsListView = () => {
    const value = useContext(getLogin);

    // useEffect(() => {
    //     getContentList()
    // }, [])

    const [contentList, setContentList] = useState([]);
    const getContentList = () => {
        axios.get("http://localhost:5000/contentList",
            { headers: { "x-access-token": value.token } }
        )
            .then(res => {
                console.log(res.data.contentList);
                setContentList([...res.data.contentList]);
            })
    }
    // console.log(contentList[0].title);

    // console.log("contentList", contentList);
    // console.log(contentList[0])
    // var content = [];
    // for(let i=0; i < contentList.length; i++){
    //     let title = contentList[i].title;
    //     let text = contentList[i].text;

    //     content.push(
    //       <span>{title}</span>
    //       <p>{text}</p>
    //     )
    // }

    return (
        <center className="ContentsList">
            <div className="SerchInput">
                <input type="text" placeholder="검색어를 입력하시오" ></input>
            </div>
            <div className="ContentListBox">


                {/* <span>{contentList[0].title}</span> */}
                {/* {contentList.map(data => <span>{data}</span>)} */}
                {/* <p>{contentList}</p> */}


                {/* <span>제목</span>
                <p>내용일부</p> */}

                <button onClick={getContentList}>테스트</button>
            </div>
        </center>
    );
};

export default ContentsListView;