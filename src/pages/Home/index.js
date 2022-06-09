import React, { useContext } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  useDisclosure,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Candidates from "../../components/Candidate";
import { ElectionContext } from "../../context/electionContext";
import AppButton from "../../common/button";
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { TOKEN } from "../../utils/constants";

function Home() {
  const { candidates } = useContext(ElectionContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Confirm the link is a sign-in with email link.
  const auth = getAuth();
  if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem(TOKEN);
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem(TOKEN);
        console.log(result);
        console.log(result.user);
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }

  return (
    <>
      <Text
        fontSize="18px"
        fontFamily="GTWalsheimProBold"
        textAlign="center"
        p="20px"
        bg="brand.primary"
        color="brand.white"
      >
        Nacos
      </Text>
      <Flex
        minH="100vh"
        w="100%"
        h="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py="30px"
        className="container"
        textAlign="center"
      >
        {candidates.length < 0 ? (
          <>
            <Heading mb="30px" as="h3" color="brand.primary" textAlign="center">
              Countdown...
            </Heading>
            <Text>Voting is yet to begin...</Text>
            <Text>We will inform you via email when voting has started.</Text>
          </>
        ) : (
          <Box
            w={{ base: "100%", sm: "500px", md: "600px" }}
            p="30px"
            bg="#fff"
            boxShadow=" 0px 0px 50px rgba(0, 0, 0, 0.05)"
            fontSize={{ base: "16px", sm: "18px" }}
          >
            <Text
              fontSize={{ base: "24px", md: "30px" }}
              fontFamily="GTWalsheimProBold"
              mb="20px"
            >
              Election is Ongoing!
            </Text>
            <Text textAlign="left">
              To vote for your preferred candidates, read the following
              instructions
            </Text>
            <UnorderedList textAlign="left">
              <ListItem>
                You can only select one candidate per position
              </ListItem>
              <ListItem>
                Once you click on the start button, you can only submit your
                votes to end the voting process
              </ListItem>
              <ListItem>You cannot vote more than once</ListItem>
            </UnorderedList>
            <Text mt="30px" fontSize="16px">
              <em>Click the button to start Voting</em>
            </Text>
            <AppButton onClick={onOpen}>Start Voting</AppButton>
          </Box>
        )}
        <Candidates isModalOpen={isOpen} onModalClose={onClose} />
      </Flex>
    </>
  );
}

export default Home;
