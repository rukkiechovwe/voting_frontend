import { useState, useContext } from "react";
import { ElectionContext } from "../../context/electionContext";

const useVotingForm = () => {
  const { electionDetail } = useContext(ElectionContext);

  const [values, setValues] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
