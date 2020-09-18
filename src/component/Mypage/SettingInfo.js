import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import getLogin from "../../Context/Context";
import AlertModal from "../../Modal/AlertModal";
import { useLocation } from "react-router-dom";

const SettingInfo = ({ token, userInfo }) => {
  const url = "http://localhost:5000";
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [age, setAge] = useState("0");
  const [city, setCity] = useState("");
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
          getChildren("서버오류입니다!");
          getClassName("error");
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
        <h1 title="mypage" className="titleStyle">
          정보수정
        </h1>
        <div className="contentStyle">
          <div className="contentDetailStyle">
            <label className="default">이메일 : </label>
            <label>{userInfo.email}</label>
          </div>
          <div className="contentDetailStyle">
            <label className="default">비밀번호 : </label>
            <input
              className="input_password1"
              type="password"
              name="password1"
              onChange={handleChange}
              value={password1}
            />
          </div>
          <div className="contentDetailStyle">
            <label className="default">비밀번호 확인 : </label>
            <input
              className="input_password2"
              type="password"
              name="password2"
              onChange={handleChange}
              value={password2}
            />
          </div>
          <div className="contentDetailStyle">
            <label className="default">닉네임 : </label>
            <label>{userInfo.nickName}</label>
          </div>
          <div className="contentDetailStyle">
            <label className="default">나이대 : </label>
            <select name="age" onClick={handleClick} className="age">
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
            <label className="default">격리된 지역 : </label>
            <input
              className="input_location"
              type="text"
              name="city"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="btn">
          <button type="submit" onClick={handleModifiedButton}>
            수정완료
          </button>
          <button onClick={handleCancel} className="cancelB">
            취 소
          </button>
        </div>
      </Container>
      <AlertModal visible={modal} onClose={closeModal} className={className}>
        {children}
      </AlertModal>
    </>
  );
};

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
  padding: 0px;

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
  }

  .default {
    font-weight: bold;
  }

  button {
    line-height: 40px;
    margin: 10px 10px;
    padding: 0px 40px;
  }
  .cancelB {
    padding: 0px 30px;
  }
  .btn {
    padding-bottom: 70px;
  }

  input {
    height: 28px;
    padding-top: 10px;
  }

  .age {
    height: 33px;
    width: 30%;
    padding-top: 10px;
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
      line-height: 30px;
    }
  }
`;
export default SettingInfo;
