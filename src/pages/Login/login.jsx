import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { EnvelopeSimple, Key } from "phosphor-react";

import useLoginForm from "./useLoginForm";
import { ValidationRules } from "./validationRules";
import { InputField } from "../../common/inputField";
import Authentication from "../../components/Authentication";
import AppButton from "../../common/button";

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
          <Text mb="30px">
            We have sent you your sign-in link. Click the link sent to your
            email address registered on our system.
          </Text>
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

          <AppButton
            mt="20px"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            {loading ? "please wait..." : "Send Login Link"}
          </AppButton>
        </div>
      )}
    </Authentication>
  );
}

export default Login;
