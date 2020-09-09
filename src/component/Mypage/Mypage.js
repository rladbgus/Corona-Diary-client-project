import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import MypageForm from "./MypageForm";
import SettingInfo from "./SettingInfo";
import axios from "axios";
import getLogin from "../../Context/Context";
import CheckingModal from "../../Modal/CheckingModal";

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
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");

  const openModalModify = () => {
    getModal(!modal);
    getChildren("정보수정");
  };

  const openModalDelete = () => {
    getModal(!modal);
    getChildren("회원탈퇴");
  };

  const closeModal = () => {
    getModal(!modal);
  };

  useEffect(() => {
    let ac = new AbortController();
    let mounted = true;
    axios
      .get(url, {
        headers: {
          "x-access-token": getToken,
        },
      })
      .then(res => {
        getData(res.data);
      });

    return () => {
      ac.abort();
    };
  }, []);

  return (
    <>
      {!value.isChecking ? (
        <Container>
          <MypageForm token={getToken} history={history} />
          <button onClick={openModalModify}>정보수정</button>
          <button onClick={openModalDelete}>회원탈퇴</button>
          <CheckingModal visible={modal} onClose={closeModal}>
            {children}
          </CheckingModal>
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
