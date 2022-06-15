import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestore_sendSignInLinkToEmail } from "../../firebase";
import { TOKEN } from "../../utils/constants";

// import { getParamByName, notify } from "../../utils/helpers";

const useLoginForm = (validationRules) => {
  const navigate = useNavigate();
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

  const actionCodeSettings = {
    url: "https://unibennacos.netlify.app/verify",
    handleCodeInApp: true,
  };

  const submitForm = async () => {
    setLoading(true);
    firestore_sendSignInLinkToEmail(auth, values.email, actionCodeSettings)
      .then(async () => {
        window.localStorage.setItem(TOKEN, values.email);
        await setLoading(false);
        await setIsSecond(true);
      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    if (Object.keys(validationRules(values)).length === 0) {
      setErrors({});
      setLoading(true);
      submitForm();
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
