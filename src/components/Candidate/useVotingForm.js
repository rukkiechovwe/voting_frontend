import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ElectionContext } from "../../context/electionContext";
import { firestore_updateDoc, db, firestore_doc } from "../../firebase";

const useVotingForm = () => {
  const { electionDetail, candidates } = useContext(ElectionContext);
  const [values, setValues] = useState({});
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

  const handleSubmit = () => {
    console.log(values);
    console.log(candidates);
    candidates.forEach(async (candidate) => {
      if (candidate.name === values[candidate.pollName]) {
        console.log(candidate.name, candidate.votes + 1);
        const candidateRef = firestore_doc(
          db,
          "2020",
          "candidates",
          "2020_candidates",
          values[candidate.pollName].split(" ").join("_")
        );
        await firestore_updateDoc(candidateRef, {
          votes: candidate.votes + 1,
        });
      }
    });
    navigate("/voting-success");
  };

  return {
    handleChange,
    handleSubmit,
    handleNextPoll,
    handlePrevPoll,
    currentQuestion,
    values,
  };
};
export default useVotingForm;
