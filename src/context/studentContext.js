import React, { useState, useEffect } from "react";
import { db, firestore_doc, firestore_getDoc } from "../firebase";
import { TOKEN } from "../utils/constants";

export const StudentContext = React.createContext();

function StudentContextProvider({ children }) {
  const [student, setStudent] = useState([]);
  //   const [hasToken, setHasToken] = useState(false);
  const savedToken = localStorage.getItem(TOKEN);

  //   const getToken = (token) => {
  //     setHasToken(token);
  //   };

  const getStudent = async () => {
    if (savedToken) {
      const docRef = firestore_doc(
        db,
        "2020", //electionYear
        "students",
        `2020_students`,
        savedToken
      );
      const docSnap = await firestore_getDoc(docRef);

      if (docSnap.exists()) {
        setStudent(docSnap.data());
      } else {
        console.log("No such document!");
      }
    }
  };

  useEffect(() => {
    getStudent();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StudentContext.Provider
      value={{
        student,
        //   hasToken,
        //   setHasToken,
        //   getToken,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
export default StudentContextProvider;
