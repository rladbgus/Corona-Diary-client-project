import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import getLogin from "../../Context/Context";
// import Contentpage from "../Content/Content";

const Content = styled.div`
  background: #FFAC9A;
  border-style : solid 3px;
`;

const ContentsListView = () => {
    const value = useContext(getLogin);
    const [contentList, setContentList] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/contentList",
            {
                headers:
                    { "x-access-token": value.token }
            })
            .then(res => {
                setContentList([...res.data.contentList]);
            });
    }, []);
    // console.log(contentList);

    return (
        <center className="ContentsList">
            <div className="SerchInput">
                <input type="text" placeholder="검색어를 입력하시오" ></input>
            </div>
            <div className="ContentListBox">
                {contentList?.map(data => (
                    <Content>

                        {/* <Contentpage key={data.id} /> */}
                        {/* contentpage로 id값 넘겨주는 법 구현하기 */}

                        <Link to={`/content/${data.id}`}>
                            <h1>{data.title}</h1>
                            <span>{data.createdAt}</span>
                            <p>{data.text}</p>
                        </Link>
                    </Content>
                ))}
            </div>
        </center>
    );
};

export default ContentsListView;