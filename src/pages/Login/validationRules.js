import { validateEmail } from "../../utils/validators";

export const ValidationRules = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "email is required";
  } 
//   else if (!validateEmail(values.email)) {
//     errors.email = "That's not your student email";
//   }

  return errors;
};
