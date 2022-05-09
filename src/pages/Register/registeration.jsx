import React from "react";
import { Button, Text } from "@chakra-ui/react";
import {
  EnvelopeSimple,
  Receipt,
  FilePdf,
  User,
  Student,
} from "phosphor-react";

import useRegisterForm from "./useRegisterForm";
import { ValidationRules } from "./validationRules";
import {
  InputField,
  FileInputField,
  SelectField,
} from "../../common/inputField";
import Authentication from "../../components/Authentication";

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

      <Button
        size="md"
        mt="30px"
        h="50px"
        w="470px"
        bg="brand.primary"
        color="brand.white"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        {loading ? "please wait..." : "Register"}
      </Button>
    </Authentication>
  );
}

export default Register;
