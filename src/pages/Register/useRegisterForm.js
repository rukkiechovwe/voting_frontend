import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  firestore_sendSignInLinkToEmail,
  db,
  storage,
  firestore_setDoc,
  firestore_doc,
  firestore_ref,
  firestore_uploadBytes,
  firestore_getDownloadURL,
} from "../../firebase";
import { TOKEN } from "../../utils/constants";

const useRegisterForm = (validationRules) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };
  const handleImage = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.files[0],
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  const actionCodeSettings = {
    url: "https://unibennacos.netlify.app/",
    handleCodeInApp: true,
  };

  const submitForm = async () => {
    setLoading(true);
    firestore_sendSignInLinkToEmail(auth, values.email, actionCodeSettings)
      .then(async () => {
        window.localStorage.setItem(TOKEN, values.email);
        const storageRef = firestore_ref(
          storage,
          `students_fees/${values.email}`
          // .split(" ")
          // .join("_")}`
        );
        await firestore_uploadBytes(storageRef, values.fees).then((_) => {
          firestore_getDownloadURL(firestore_ref(storage, storageRef)).then(
            async (url) => {
              let uploadStudent = {
                ...values,
                feesUrl: url,
              };
              const storageRef = firestore_ref(
                storage,
                `students_dues/${uploadStudent.email}`
              );
              await firestore_uploadBytes(storageRef, values.dues).then((_) => {
                firestore_getDownloadURL(
                  firestore_ref(storage, storageRef)
                ).then(async (url) => {
                  uploadStudent = {
                    ...uploadStudent,
                    duesUrl: url,
                    eligible: false,
                  };
                  delete uploadStudent.fees;
                  delete uploadStudent.dues;
                  const docRef = firestore_doc(
                    db,
                    "2020", //electionYear
                    "students",
                    `2020_students`,
                    uploadStudent.email
                  );
                  await firestore_setDoc(docRef, uploadStudent);
                  await setLoading(false);
                  navigate("/email-auth");
                });
              });
            }
          );
        });
      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(validationRules(values)).length === 0) {
      setErrors({});

      submitForm();
    } else {
      setErrors(validationRules(values));
      console.log(errors);
    }
  };

  return {
    handleChange,
    handleImage,
    handleSubmit,
    values,
    errors,
    loading,
  };
};

export default useRegisterForm;
