import { validateEmail } from "../../utils/validators";

export const ValidationRules = (values) => {
  let errors = {};
  if (!values.fname) errors.fname = "first name is required";
  if (!values.lname) errors.lname = "last name is required";
  if (!values.matNo) errors.matNo = "matriculation number is required";

  if (!values.email) errors.email = "email is required";
  else if (!validateEmail(values.email))
    errors.email = "That's not your student email";

  if (!values.level) errors.level = "level is required";
  if (!values.fees) errors.fees = "fees is required";
  if (!values.dues) errors.dues = "dues is required";

  return errors;
};
