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
  const [change, setChange] = useState(true);
  const [data, getData] = useState("");
  const token = useContext(getLogin).token;
  const url = "http://localhost:5000/mypage";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "x-access-token": token,
        },
      })
      .then(res => {
        getData(res.data);
      });
  }, []);

  const handleSettingbutton = () => {
    let checking = window.prompt("닉네임을 입력하세요");
    if (checking === data.nickName) {
      setChange(!change);
    } else {
      return alert("닉네임을 잘못 입력했습니다!!");
    }
    setChange(!change);
  };

  const handleModifybutton = () => {
    setChange(!change);
  };

  return (
    <>
      {change ? (
        <Container>
          <MypageForm
            token={token}
            handleSettingbutton={handleSettingbutton}
            history={history}
          />
        </Container>
      ) : (
        <Container>
          <SettingInfo
            userInfo={data}
            token={token}
            handleModifybutton={handleModifybutton}
          />
        </Container>
      )}
    </>
  );
};

export default Mypage;
