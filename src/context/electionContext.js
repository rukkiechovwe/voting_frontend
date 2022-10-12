import React, { useEffect, useState } from "react";
import {
  db,
  firestore_collection,
  firestore_doc,
  firestore_getDoc,
  firestore_getDocs,
} from "../firebase";

export const ElectionContext = React.createContext();

function ElectionContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);
  const [electionDetail, setElectionDetail] = useState({});

  //   const [electionYear, setElectionYear] = useState("");
  //   const getElectionYear = (year) => {
  //     setElectionYear(year);
  //   };

  const getElectionDetail = async () => {
    // Get election metadata like
    setLoading(true);
    const docRef = firestore_doc(db, "2020", "Metadata");
    const docSnap = await firestore_getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setElectionDetail(docSnap.data());
      setLoading(false);
    } else {
      setLoading(false);
      console.log("election data not found!");
    }
  };

  const getCandidates = async () => {
    // get election candidates
    setLoading(true);
    const querySnapshot = await firestore_getDocs(
      firestore_collection(db, "2020", "candidates", `2020_candidates`)
    );
    setCandidates([]);
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      setCandidates((candidates) => [...candidates, doc.data()]);
    });
    setLoading(false);
  };

  useEffect(() => {
    //  if (electionYear) {
    getElectionDetail();
    getCandidates();

    //  }
  }, []);

  return (
    <ElectionContext.Provider
      value={{
        //   electionYear,
        //   getElectionYear,
        electionDetail,
        candidates,
        loading,
      }}
    >
      {children}
    </ElectionContext.Provider>
  );
}
export default ElectionContextProvider;
