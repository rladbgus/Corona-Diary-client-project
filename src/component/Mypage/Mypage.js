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
  const url = "http://localhost:5000/mypage";
  const getToken = window.sessionStorage.getItem("token");

  useEffect(() => {
    let ac = new AbortController();
    let mounted = true;
    if (mounted) {
      axios
        .get(url, {
          headers: {
            "x-access-token": getToken,
          },
        })
        .then(res => {
          getData(res.data);
        });
    }
    return () => {
      mounted = false;
      ac.abort();
    };
  }, []);

  return (
    <>
      {!value.isChecking ? (
        <Container>
          <MypageForm token={getToken} history={history} />
        </Container>
      ) : (
        <Container>
          <SettingInfo userInfo={data} token={getToken} />
        </Container>
      )}
    </>
  );
};

export default Mypage;
