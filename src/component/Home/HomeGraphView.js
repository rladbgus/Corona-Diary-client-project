import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const HomeGraphViewStyle = styled.div`
  background: #eec2f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  line-height: 30px;

  img {
    width: 600;
    height: 400;
  }
`;

const HomeGraphView = () => {
  const url =
    "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson";
  const serviceKey =
    "03zozd07ngOiK9lXcDXbElWQz7e%2FuNBN7Z5yGQeOlz%2FfT4wSjbxdeb9b80yMWLhCqKriZwLBrrD%2BzOqnD2hldQ%3D%3D";
  const pageNo = 1;
  const numOfRows = 10;
  const startCreateDt = 20200310;
  const endCreateDt = 20200315;
  const [data, setData] = useState(null);

  useEffect(() => {
    let ac = new AbortController();
    // axios.request({
    //   method: "GET",
    //   url: `${url}?$serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`,
    //   responseType: "arraybuffer",
    //   responseEncoding: "binary",
    // });
    fetch(
      `${url}?$serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`,
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin)
      }
    )
      // axios
      //   .get(
      //     `${url}?$serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`,
      //     { headers: { "Access-Control-Allow-Origin": "*" } }
      //   )
      .then(res => {
        console.log("Status", res.statusCode);
        console.log("Headers", JSON.stringify(res.headers));
        console.log("Reponse received", res.body);
        console.log(res);
        setData(res.body);
      });
    return () => {
      ac.abort();
    };
  }, []);

  return (
    <HomeGraphViewStyle>
      <div className="homeGraphView">
        <div className="homeGraphContainer">
          <br />
          {data}
          <img></img>
        </div>
      </div>
    </HomeGraphViewStyle>
  );
};

export default HomeGraphView;
