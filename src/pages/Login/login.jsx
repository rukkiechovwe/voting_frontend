import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
import { EnvelopeSimple, Key } from "phosphor-react";

import useLoginForm from "./useLoginForm";
import { ValidationRules } from "./validationRules";
import { InputField } from "../../common/inputField";
import Authentication from "../../components/Authentication";

function Login() {
  const { isSecond, errors, loading, handleChange, handleSubmit } =
    useLoginForm(ValidationRules);

  const ErrorMessage = ({ type }) => {
    const errorMessage = errors[type];
    return errors[type] ? (
      <p style={{ color: "red" }}>{errorMessage}</p>
    ) : (
      <Text />
    );
  };

  return (
    <Authentication>
      {isSecond ? (
        <div className="otp">
          <Text mb="30px">Enter the OTP sent to your email address</Text>
          <InputField
            name="otp"
            type="text"
            placeholder="OTP"
            onChange={(e) => handleChange(e)}
            icon={<Key size={20} />}
          />
          <ErrorMessage type="otp" />

          <Button
            size="md"
            mt="20px"
            h="50px"
            w="470px"
            bg="brand.primary"
            color="brand.white"
          >
            {loading ? "please wait..." : "Verify OTP"}
          </Button>
        </div>
      ) : (
        <div className="email">
          <Text mb="30px">
            Enter the email address registered on the system to recieve a one
            time password
          </Text>
          <InputField
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={(e) => handleChange(e)}
            icon={<EnvelopeSimple size={20} />}
          />
          <ErrorMessage type="email" />

          <Button
            size="md"
            mt="20px"
            h="50px"
            w="470px"
            bg="brand.primary"
            color="brand.white"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {loading ? "please wait..." : "Send OTP"}
          </Button>
        </div>
      )}
    </Authentication>
  );
}

export default Login;
