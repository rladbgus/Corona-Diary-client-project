// import React, { useState, useEffect, useContext } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import getLogin from "../../Context/Context";
// import Content from "./Content";
// import EditContent from "./EditContent";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 10px;
// `;

// const MainContent = ({ history }) => {
//   const value = useContext(getLogin);

//   const getToken = window.sessionStorage.getItem("token");
//   const [data, getData] = useState("");
//   useEffect(() => {
//     let ac = new AbortController();
//     axios
//       .get("http://localhost:5000/mypage", {
//         headers: {
//           "x-access-token": getToken,
//         },
//       })
//       .then(res => {
//         getData(res.data);
//       });
//     return () => {
//       ac.abort();
//     };
//   }, []);

//   return (
//     <>
//       {!value.isChecking ? (
//         <Container>
//           <Content history={history} token={getToken} />
//         </Container>
//       ) : (
//           <Container>
//             <EditContent userInfo={data} token={getToken} />
//           </Container>
//         )}
//     </>
//   );
// };

// export default MainContent;
