import React from "react";
import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import {
  EnvelopeSimple,
  Receipt,
  FilePdf,
  User,
  Student,
} from "phosphor-react";

import useRegisterForm from "./useRegisterForm";
import Authentication from "../../components/Authentication";
import AppButton from "../../common/button";
import { ValidationRules } from "./validationRules";
import {
  InputField,
  FileInputField,
  SelectField,
} from "../../common/inputField";

function Register() {
  const { values, errors, loading, handleChange, handleImage, handleSubmit } =
    useRegisterForm(ValidationRules);

  const ErrorMessage = ({ type }) => {
    const errorMessage = errors[type];
    return errors[type] ? (
      <p
        style={{
          color: "red",
          marginTop: "-15px",
          textAlign: "left",
          alignSelf: "flex-start",
          marginBottom: "20px",
        }}
      >
        {errorMessage}
      </p>
    ) : (
      <Text />
    );
  };

  return (
    <Authentication>
      <InputField
        name="fname"
        type="text"
        placeholder="First Name"
        onChange={(e) => handleChange(e)}
        icon={<User size={20} />}
      />
      <ErrorMessage type="fname" />

      <InputField
        name="lname"
        type="text"
        placeholder="Last Name"
        onChange={(e) => handleChange(e)}
        icon={<User size={20} />}
      />
      <ErrorMessage type="lname" />

      <InputField
        name="email"
        type="email"
        placeholder="Student Email"
        onChange={(e) => handleChange(e)}
        icon={<EnvelopeSimple size={20} />}
      />
      <ErrorMessage type="email" />

      <InputField
        name="matNo"
        type="text"
        placeholder="Matriculation Number"
        onChange={(e) => handleChange(e)}
        icon={<User size={20} />}
      />
      <ErrorMessage type="matNo" />

      <SelectField
        name="level"
        placeholder="Select level"
        onChange={(e) => {
          handleChange(e);
        }}
        icon={<Student size={20} />}
      >
        {/* <option value="" disabled>
          --SELECT LEVEL--
        </option> */}
        <option value="200">200 Level</option>
        <option value="300">300 Level</option>
        <option value="400">400 Level</option>
        <option value="500">500 Level</option>
      </SelectField>

      <FileInputField
        name="fees"
        onChange={(e) => handleImage(e)}
        icon={<FilePdf size={20} />}
        placeholder={
          values.fees ? values.fees.name : `Upload School Fees print out`
        }
      />
      <ErrorMessage type="fees" />

      <FileInputField
        name="dues"
        onChange={(e) => handleImage(e)}
        icon={<Receipt size={20} />}
        placeholder={
          values.dues ? values.dues.name : `Upload NACOS dues receipt`
        }
      />
      <ErrorMessage type="dues" />

      <AppButton
        mt="30px"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        {loading ? "please wait..." : "Register"}
      </AppButton>

      <Text textAlign="center" paddingTop="1.5rem">
        Already registered for the election?{" "}
        <NavLink to="/login">
          <span
            style={{
              color: "#703bda",
              fontWeight: "600",
            }}
          >
            Login here
          </span>
        </NavLink>
      </Text>
    </Authentication>
  );
}

export default Register;
