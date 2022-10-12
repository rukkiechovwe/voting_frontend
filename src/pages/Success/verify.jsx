import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  auth,
  firestore_sendSignInLinkToEmail,
  firestore_isSignInWithEmailLink,
} from "../../firebase";

import { TOKEN } from "../../utils/constants";

function Verify() {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (firestore_isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem(TOKEN);
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    firestore_sendSignInLinkToEmail(auth, email, window.location.href)
      .then((result) => {
        window.localStorage.removeItem(TOKEN);
        const expireToken = new Date().setMinutes(5);
        //   const expireToken = new Date().setHours(24);
        localStorage.setItem("expire_token", expireToken);

        console.log(result);
        setStatus(true);
        setLoading(false);
        toast.success("Verification Successful!");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.code);
        console.log(error.message);
        setStatus(false);
        setLoading(false);
        toast.error("Verification Failed!");
        setError(error.message);

        //   if (error.message.includes("auth/argument-error")) {
        //     setTimeout(() => {
        //       navigate("/register");
        //     }, 3000);
        //   }
      });
  }
  return (
    <Flex
      minH="100vh"
      h="100%"
      py="30px"
      overflow="auto"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <ToastContainer linit={1} />
      <Box
        w={{ base: "100%", sm: "500px", md: "530px" }}
        p="30px"
        bg="#fff"
        boxShadow=" 0px 0px 50px rgba(0, 0, 0, 0.05)"
        textAlign="center"
      >
        <Heading
          as="h6"
          color="brand.primary"
          fontSize="22px"
          fontFamily="GTWalsheim"
          fontWeight="100"
        >
          {!loading && !status ? (
            <>
              Verification Failed.
              <Text fontSize="16px" mt="30px" fontFamily="GTWalsheim">
                {error}
              </Text>
            </>
          ) : !loading && status ? (
            "Verification Succesful!"
          ) : (
            "Please wait while we verify your email..."
          )}
        </Heading>
      </Box>
    </Flex>
  );
}

export default Verify;
