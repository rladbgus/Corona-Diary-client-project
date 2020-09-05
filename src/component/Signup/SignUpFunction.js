import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import AlertModal from "../../Modal/AlertModal";

const SignUpFunction = ({ history }) => {
  const url = "http://localhost:5000/user/signup";
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickName, setNickName] = useState("");
  const [age, setAge] = useState("0");
  const [city, setCity] = useState("");
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  const handleChange = async event => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password1") {
      setPassword1(event.target.value);
    }
    if (event.target.name === "password2") {
      setPassword2(event.target.value);
    }
    if (event.target.name === "age") {
      setAge(event.target.value);
    }
    if (event.target.name === "nickName") {
      setNickName(event.target.value);
    }
    if (event.target.name === "city") {
      setCity(event.target.value);
    }
  };

  const emailCheckingButton = event => {
    event.preventDefault();
    let checkEmail = {};
    checkEmail.email = email;
    axios
      .post(url + "/email", checkEmail)
      .then(res => {
        if (res.status === 200) {
          getChildren("사용할 수 있는 이메일주소입니다");
          getClassName("emailcheck");
          return openModal();
        }
      })
      .catch(err => {
        if (err) {
          getChildren("서버에러입니다");
          getClassName("emailcheckerror");
          return openModal();
        }
      });
  };

  const nickNameCheckingButton = event => {
    event.preventDefault();
    let checkNickName = {};
    checkNickName.nickName = nickName;
    axios
      .post(url + "/nickName", checkNickName)
      .then(res => {
        if (res.status === 201) {
          getChildren("사용할 수 있는 닉네임입니다");
          getClassName("emailcheck");
          return openModal();
        }
      })
      .catch(err => {
        if (err) {
          getChildren("서버에러입니다");
          getClassName("emailcheckerror");
          return openModal();
        }
      });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    let data = {};
    data.email = email;
    data.password = password2;
    data.nickName = nickName;
    data.age = Number(age);
    data.city = city;
    if (password1 !== password2) {
      getChildren("비밀번호가 일치하지 않습니다.");
      getClassName("passwordchecke");
      document.querySelector(".input_password1").value = "";
      document.querySelector(".input_password2").value = "";
      return openModal();
    }
    console.log(data);
    await axios.post(url, data).then(res => {
      getChildren("회원가입이 완료되었습니다:)");
      getClassName("signup");
      return openModal();
    });
  };

  return (
    <>
      <div>
        <label>이메일</label>
        <input
          className="input_email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <button className="email_check" onClick={emailCheckingButton}>
          중복확인
        </button>
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
        <label>비밀번호확인</label>
        <input
          className="input_password2"
          type="password"
          name="password2"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>닉네임</label>
        <input
          className="input_nickname"
          type="text"
          name="nickName"
          onChange={handleChange}
        />
        <button className="nickname_check" onClick={nickNameCheckingButton}>
          중복확인
        </button>
      </div>
      <div>
        <label>나이대</label>
        <select name="age" onChange={handleChange}>
          <option value="0">10대이하</option>
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
        <label>격리된 지역</label>
        <input
          className="input_location"
          type="text"
          name="city"
          placeholder="ex) Seoul or Busan"
          onChange={handleChange}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit">회원가입</button>
        <Link to="/">
          <button>취소</button>
        </Link>
      </form>
      <AlertModal visible={modal} onClose={closeModal} className={className}>
        {children}
      </AlertModal>
    </>
  );
};

export default withRouter(SignUpFunction);
