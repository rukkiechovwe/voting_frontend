import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  auth,
  firestore_isSignInWithEmailLink,
  firestore_signInWithEmailLink,
} from "../../firebase";
import { TOKEN } from "../../utils/constants";

function Verify() {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (firestore_isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem(TOKEN);

      // if email is not found, redirect the user to register page
      if (!email) {
        navigate("/register");
      }

      firestore_signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          toast.success("Verification Successful!");

          //  set session to expire in 24 hours
          const expireToken = new Date().setHours(new Date().getHours() + 24);
          localStorage.setItem("expire_token", expireToken);

          setStatus(true);
          setLoading(false);

          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((error) => {
          toast.error("Verification Failed!");

          setError(error.message);
          setStatus(false);
          setLoading(false);

          if (error.message.includes("auth/argument-error")) {
            setTimeout(() => {
              navigate("/register");
            }, 3000);
          }
        });
    }
  }, []);

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
