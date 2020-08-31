// import React, { useState, createContext } from "react";

// export const UserContext = createContext();

// //Provider를 state를 모아둔 store라 생각하기
// const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     name: "yoohyeon",
//     isLogged: true
//   });

//   // prevState를 받아 return을 통해 state를 업데이트함
//   const loggedUserIn = () => {
//     setUser(prevState => ({
//       ...prevState,
//       isLogged: false
//     }));
//   };

//   return (
//     <UserContext.Provider value={user, loggedUserIn}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContextProvider;