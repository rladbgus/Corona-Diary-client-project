import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import getLogin from "../../Context/Context";
import AlertModal from "../../Modal/AlertModal";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const EditContent = ({ token, userInfo }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [tags, setTags] = useState("");
  const value = useContext(getLogin);
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");
  const location = useLocation();

  useEffect(() => {
    return () => {
      value.handleIsChecking();
    };
  }, [location]);

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  const handleModifiedButton = async event => {
    event.preventDefault();

    let data = {};
    data.title = userInfo.title;
    data.text = text;
    data.img = img;
    data.tags = tags;
    if (title === "" || text === "") {
      getChildren("빈 항목을 채워주세요");
      getClassName("empty");
      return openModal();
    }
    await axios
      .patch("http://localhost:5000/content/7", data, {
        headers: {
          "x-access-token": token,
        },
      })
      .then(res => {
        if (res.status === 201) {
          getChildren("수정이 완료되었습니다.");
          getClassName("complete");
          openModal();
        }
      })
      .catch(err => {
        if (err) {
          children = "서버오류입니다!";
          className = "error";
          return openModal();
        }
      });
  };

  const handleCancel = () => {
    value.handleIsChecking();
  };

  // const handleChange = event => {
  //   if (event.target.name === "password1") {
  //     setPassword1(event.target.value);
  //   }
  //   if (event.target.name === "password2") {
  //     setPassword2(event.target.value);
  //   }
  //   if (event.target.name === "city") {
  //     setCity(event.target.value);
  //   }
  // };

  return (
    <>
      <Container>
        <h1 title="mypage">일기 수정</h1>
        <div>
          {/* 전 데이터 input창에 그대로 넣어두기 */}
        </div>
        <button type="submit" onClick={handleModifiedButton}>
          수정완료
        </button>
        <button onClick={handleCancel}>취소</button>
      </Container>
      <AlertModal visible={modal} onClose={closeModal} className={className}>
        {children}
      </AlertModal>
    </>
  );
};

export default EditContent;
