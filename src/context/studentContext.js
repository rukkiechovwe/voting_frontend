import React, { useEffect, useState } from "react";

export const StudentContext = React.createContext();

function StudentContextProvider({ children }) {
  //   const [studentList, setStudentList] = useState([]);
  const [hasToken, setHasToken] = useState(false);

  //   const getStudentList = async () => {
  //     const querySnapshot = await firestore_getDocs(
  //       firestore_collection(db, "admin")
  //     );
  //     const data = [];
  //     querySnapshot.forEach((doc) => {
  //       data.push(doc.data());
  //       // console.log(doc.data());
  //     });
  //     setStudentList(data);
  //   };
  const getToken = (token) => {
    setHasToken(token);
  };
  //   useEffect(() => {
  //     getStudentList();
  //   }, []);

  return (
    <StudentContext.Provider
      value={{
        // studentList,

        hasToken,
        setHasToken,
        getToken,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
export default StudentContextProvider;
