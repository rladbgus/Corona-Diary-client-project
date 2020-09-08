import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import getLogin from "../../Context/Context";
import AlertModal from "../../Modal/AlertModal";
import { useLocation, Link } from "react-router-dom";
// import surveydata from "../Writing/surveydata";
// import SurveyForm from "../Writing/SurveyForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const EditContent = ({ history }) => {
  let splitUrl = window.location.href.split("/");
  let contentId = splitUrl[4];

  const getToken = window.sessionStorage.getItem("token");
  const value = useContext(getLogin);
  // const location = useLocation();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tag, getTag] = useState("");
  const [arrayTags, getArrayTasgs] = useState([]);
  const [img, setImg] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [time, setTime] = useState("");
  const [temp, setTemp] = useState("");
  const [modal, getModal] = useState(false);
  const [children, getChildren] = useState("");
  const [className, getClassName] = useState("");

  const openModal = () => {
    getModal(!modal);
  };

  const closeModal = () => {
    getModal(!modal);
  };

  useEffect(() => {
    const ac = new AbortController();
    axios
      .get(`http://localhost:5000/content/${contentId}`, {
        headers: { "x-access-token": getToken },
      })
      .then(res => {
        console.log(res);
        setTitle(res.data.contentDetail.title);
        setText(res.data.contentDetail.text);
        getArrayTasgs([...arrayTags, ...res.data.contentDetail.tag]);
        setImg(res.data.contentDetail.referenceFile);
        // setTime(res.data.contentDetail);
        // setTemp(res.data.contentDetail);
      })
      .catch(() => {});
    return () => {
      ac.abort();
    };
  }, []);

  const titleHandleChange = e => {
    setTitle(e.target.value);
  };

  const textHandleChange = e => {
    setText(e.target.value);
  };

  const tagHandleChange = e => {
    getTag(e.target.value);
  };

  const handleKey = e => {
    if (e.key === "Enter") {
      getArrayTasgs([...arrayTags, { tag: tag }]);
      getTag("");
    }
  };

  const handleTime = e => {
    setTime(e.target.value);
  };

  const handleTemp = e => {
    setTemp(e.target.value);
  };

  const submitButton = event => {
    event.preventDefault();
    if (title === "") {
      getChildren("제목을 채워주세요");
      getClassName("checktitle");
      return openModal();
    }
    if (text === "") {
      getChildren("내용을 채워주세요");
      getClassName("checktext");
      return openModal();
    }
    axios
      .post(
        `http://localhost:5000/content/${contentId}`,
        // data ,
        {
          headers: {
            "x-access-token": getToken,
          },
        }
      )
      .then(res => {
        console.log(res.data);
        history.push(`/content/${contentId}`);
      });
  };

  const HandleChangeImg = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setImg(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <Container>
        <h1 title="mypage">일기 수정</h1>
        <div>
          <label>제목</label>
          <input
            name="title"
            className="input_title"
            type="text"
            value={title}
            onChange={titleHandleChange}
          />
        </div>
        <div>
          <label>내용</label>
          <textarea
            name="text"
            className="input_content"
            type="text"
            value={text}
            onChange={textHandleChange}
          />
        </div>
        추가된 태그 :
        {arrayTags.length === 0 ? "" : arrayTags.map(list => `#${list.tag} `)}
        <div>
          <label>태그 추가</label>
          <input
            className="input_tag"
            name="tags"
            type="text"
            placeholder="기존 태그들은 삭제됩니다!"
            onChange={tagHandleChange}
            onKeyDown={handleKey}
            value={tag}
          />
        </div>
        <div>
          <img className="imgpreview" src={imgData} />
          <br />
          <input type="file" onChange={HandleChangeImg} />
        </div>
        <form onSubmit={submitButton}>
          <button type="submit"> 수정완료 </button>
          <Link to="/">
            <button>취소</button>
          </Link>
        </form>
        {/* 설문조사 */}
        <div title="signup">설문조사</div>
        <div>
          <label>코로나걸린시기</label>
          <input
            name="covid_date"
            className="input_since"
            type="text"
            valur={time}
            onChange={handleTime}
          />
        </div>
        <div>
          <label>질문1: 현재 체온은 어떠신가요?</label>
          <input
            name="q_temp"
            className="input_temperature"
            type="text"
            value={temp}
            onChange={handleTemp}
          />
        </div>
      </Container>
      <AlertModal visible={modal} onClose={closeModal} className={className}>
        {children}
      </AlertModal>
    </>
  );
};

export default EditContent;
