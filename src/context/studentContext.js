import React, { useState, useEffect, useContext } from "react";
import { db, firestore_doc, firestore_getDoc } from "../firebase";
import { TOKEN } from "../utils/constants";
import { ElectionContext } from "./electionContext";

export const StudentContext = React.createContext();

function StudentContextProvider({ children }) {
  const { electionYear } = useContext(ElectionContext);
  const [student, setStudent] = useState([]);
  const savedToken = localStorage.getItem(TOKEN);

  const getStudent = async () => {
    if (savedToken) {
      const docRef = firestore_doc(
        db,
        electionYear, //electionYear
        "students",
        `${electionYear}_students`,
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
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
export default StudentContextProvider;
