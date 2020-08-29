import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const SettingInfo = ({ handleModifybutton }) => {
  const [change, setChange] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const url = "http://localhost:3001";

  const handleModifiedButton = async event => {
    event.preventDefault();
    if (password1 !== password2) {
      alert("비밀번호가 틀립니다.");
      document.querySelector(".input_password1").value = "";
      document.querySelector(".input_password2").value = "";
    }
    let data = {};
    data.password = password2;
    data.age = age;
    data.location = location;
    console.log(data);
    await axios.put(url, data).then(res => {
      if (res.status === 201) {
        alert("수정완료~!");
      } else {
        alert("수정실패 다시 시도 바랍니다.");
      }
      console.log(res);
    });
    await setChange(!change);
    await handleModifybutton(change);
  };

  const handleCancel = () => {
    setChange(!change);
    handleModifybutton(change);
  };

  const handleChange = event => {
    if (event.target.name === "password1") {
      setPassword1(event.target.value);
    }
    if (event.target.name === "password2") {
      setPassword2(event.target.value);
    }
    if (event.target.name === "age") {
      setAge(event.target.value);
    }
    if (event.target.name === "location") {
      setLocation(event.target.value);
    }
  };

  const handleDelete = event => {
    event.preventDefault();
    let data = {};
    axios.patch(url, data);
  };

  return (
    <>
      <Container>
        <h1 title="mypage">정보수정</h1>
        <div>
          <label>이메일 : </label>
          <label>blah@naver.com</label>
        </div>
        <div>
          <label>비밀번호</label>
          <input
            className="input_password1"
            type="password"
            name="password1"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input
            className="input_password2"
            type="password"
            name="password2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>닉네임 : </label>
          <label>blahblah</label>
        </div>
        <div>
          <label>나이대 : </label>
          <input
            className="input_age"
            type="text"
            name="age"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>격리된 지역 : </label>
          <input
            className="input_location"
            type="text"
            name="location"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleModifiedButton}>
          수정완료
        </button>
        <button onClick={handleCancel}>취소</button>
        <button onClick={handleDelete}>회원탈퇴</button>
      </Container>
    </>
  );
};

export default SettingInfo;
