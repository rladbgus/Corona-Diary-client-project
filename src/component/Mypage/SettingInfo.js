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

const SettingInfo = ({ token, userInfo }) => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [age, setAge] = useState("0");
  const [city, setCity] = useState("");
  const url = "http://localhost:5000";
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
    data.email = userInfo.email;
    data.password = password2;
    data.age = age;
    data.city = city;
    if (password1 !== password2) {
      getChildren("비밀번호가 틀립니다.");
      getClassName("password");
      setPassword1("");
      setPassword2("");
      return openModal();
    }
    if (password2.length < 8) {
      getChildren("비밀번호는 8자리 이상으로 설정바랍니다.");
      getClassName("passwordchecke");
      setPassword1("");
      setPassword2("");
      return openModal();
    }
    if (/(\w+\d)|(\d+\w)/.test(password2, "gi") === false) {
      getChildren("문자와 숫자 조합으로 만들어 주세요");
      getClassName("passwordcheck3");
      setPassword1("");
      setPassword2("");
      return openModal();
    }
    if (password2 === "" || age === 0 || age === "0" || city === "") {
      getChildren("빈 항목이 있습니다. 채워주세요~");
      getClassName("empty");
      return openModal();
    }
    await axios
      .patch(url + "/mypage", data, {
        headers: {
          "x-access-token": token,
        },
      })
      .then(res => {
        if (res.status === 201) {
          getChildren("수정완료!!");
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

  const handleChange = event => {
    if (event.target.name === "password1") {
      setPassword1(event.target.value);
    }
    if (event.target.name === "password2") {
      setPassword2(event.target.value);
    }
    if (event.target.name === "city") {
      setCity(event.target.value);
    }
  };

  const handleClick = event => {
    setAge(Number(event.target.value));
  };

  return (
    <>
      <Container>
        <h1 title="mypage">정보수정</h1>
        <div>
          <label>이메일 : </label>
          <label>{userInfo.email}</label>
        </div>
        <div>
          <label>비밀번호</label>
          <input
            className="input_password1"
            type="password"
            name="password1"
            onChange={handleChange}
            value={password1}
          />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input
            className="input_password2"
            type="password"
            name="password2"
            onChange={handleChange}
            value={password2}
          />
        </div>
        <div>
          <label>닉네임 : </label>
          <label>{userInfo.nickName}</label>
        </div>
        <div>
          <label>나이대 : </label>
          <select name="age" onClick={handleClick}>
            <option value="0">나이대선택</option>
            <option value="9">10대이하</option>
            <option value="10">10대</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대</option>
            <option value="70">70대이상</option>
          </select>
        </div>
        <div>
          <label>격리된 지역 : </label>
          <input
            className="input_location"
            type="text"
            name="city"
            onChange={handleChange}
          />
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

export default SettingInfo;
