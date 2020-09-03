import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import MypageForm from "./MypageForm";
import SettingInfo from "./SettingInfo";
import axios from "axios";
import getLogin from "../../Context/Context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Mypage = ({ history }) => {
  const [data, getData] = useState("");
  const value = useContext(getLogin);
  const url = "http://54.180.108.57:5000/mypage";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "x-access-token": value.token,
        },
      })
      .then(res => {
        getData(res.data);
      });
  }, []);

  return (
    <>
      {!value.isChecking ? (
        <Container>
          <MypageForm token={value.token} history={history} />
        </Container>
      ) : (
          <Container>
            <SettingInfo userInfo={data} token={value.token} />
          </Container>
        )}
    </>
  );
};

export default Mypage;
