import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ElectionContext } from "../../context/electionContext";
import { StudentContext } from "../../context/studentContext";
import {
  firestore_updateDoc,
  db,
  firestore_doc,
  firestore_setDoc,
} from "../../firebase";

const useVotingForm = () => {
  const { electionYear, electionDetail, candidates } =
    useContext(ElectionContext);
  const { student } = useContext(StudentContext);
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleNextPoll = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < electionDetail.pollsAvailable.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert("You are at the end");
    }
  };
  const handlePrevPoll = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    } else {
      alert("You are at the beginning");
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const recordVotes = async () => {
    setLoading(true);
    const voteEntry = {
      student_name: `${student.fname} ${student.lname}`,
      student_mat_no: student.matNo,
      student_email: student.email,
      timeStamp: new Date(),
      candidates: values,
    };
    const docRef = firestore_doc(
      db,
      electionYear, // root collection
      "vote_entries", // documentId
      `${electionYear}_vote_entries`, // subcollection
      `${voteEntry.student_email}` // subcollection-documentId
    );
    await firestore_setDoc(docRef, voteEntry);
  };
  const recordCandidates = async (candidate) => {
    if (candidate.name === values[candidate.pollName]) {
      const candidateRef = firestore_doc(
        db,
        electionYear,
        "candidates",
        `${electionYear}_candidates`,
        values[candidate.pollName].split(" ").join("_")
      );
      await firestore_updateDoc(candidateRef, {
        votes: candidate.votes + 1,
      });
      await window.open(
        "https://unibennacos.netlify.app/voting-success",
        "_self"
      );
    }
  };
  const updateStudentVoteCount = async () => {
    const washingtonRef = firestore_doc(
      db,
      electionYear,
      "students",
      `${electionYear}_students`,
      student.email
    );

    await firestore_updateDoc(washingtonRef, {
      hasVoted: true,
    });
  };

  const handleSubmit = async () => {
    // TODO: move to backend, use batch and transaction to update and lock candidates
    if (!student.hasVoted) {
      await recordVotes();
      await updateStudentVoteCount();
      await candidates.forEach(async (candidate) => {
        recordCandidates(candidate);
      });
    } else {
      console.log("cannot vote more than once");
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleNextPoll,
    handlePrevPoll,
    currentQuestion,
    values,
    loading,
  };
};
export default useVotingForm;
