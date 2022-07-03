import React from "react";
import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { EnvelopeSimple } from "phosphor-react";

import useLoginForm from "./useLoginForm";
import Authentication from "../../components/Authentication";
import AppButton from "../../common/button";
import { ValidationRules } from "./validationRules";
import { InputField } from "../../common/inputField";

function Login() {
  const { isSecond, errors, loading, handleChange, handleSubmit } =
    useLoginForm(ValidationRules);

  const ErrorMessage = ({ type }) => {
    const errorMessage = errors[type];
    return errors[type] ? (
      <p style={{ color: "red", marginTop: "-15px" }}>{errorMessage}</p>
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

          <Text textAlign="center" paddingTop="1.5rem">
            Haven't registered for the election?{" "}
            <NavLink to="/register">
              <span
                style={{
                  color: "#703bda",
                  fontWeight: "600",
                }}
              >
                Register here
              </span>
            </NavLink>
          </Text>
        </div>
      )}
    </Authentication>
  );
}

export default Login;
