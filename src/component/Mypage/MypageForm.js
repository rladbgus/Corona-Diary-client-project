import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const MypageForm = ({ token }) => {
  const url = "http://localhost:5000";
  const [data, getData] = useState("");

  useEffect(() => {
    let mounted = true;
    axios
      .get(url + "/mypage", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        if (mounted) {
          getData(res.data.user);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Container>
        <h1 title="mypage" className="titleStyle">
          회원정보
        </h1>
        <div className="contentStyle">
          <div>
            <label className="default">이메일 : </label>
            <label>{data.email}</label>
          </div>
          <div>
            <label className="default">닉네임 : </label>
            <label>{data.nickName}</label>
          </div>
          <div>
            <label className="default">나이대 : </label>
            <label>{data.age}</label>
          </div>
          <div>
            <label className="default">지역 : </label>
            <label>{data.city}</label>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MypageForm;

const BREAK_POINT_MOBILE = 580;
const BREAK_POINT_TABLET = 1024;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  font-size: 27px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  .titleStyle {
    text-align: center;
    width: 70%;
    border-bottom: 2px solid black;
    padding-bottom: 20px;
  }
  .contentStyle {
    align-content: space-around;
    padding: 50px 70px;
    line-height: 70px;
    padding-top: 5px;
    margin: 0px;
  }

  .default {
    font-weight: bold;
  }

  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    font-size: 17px;
    .contentStyle {
      line-height: 50px;
    }
  }
`;
