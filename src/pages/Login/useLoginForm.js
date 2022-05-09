import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { getParamByName, notify } from "../../utils/helpers";

const useLoginForm = (validationRules) => {
  const [isSecond, setIsSecond] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  //   const history = useHistory();

  const handleChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    if (Object.keys(validationRules(values)).length === 0) {
      setErrors({});
      setLoading(true);
      // send to firebase
      setValues({});
      setIsSecond(true);
    } else {
      setErrors(validationRules(values));
      console.log(errors);
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    loading,
    isSecond,
  };
};

export default useLoginForm;
