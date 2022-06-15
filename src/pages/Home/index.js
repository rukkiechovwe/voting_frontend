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
import { NavLink } from "react-router-dom";
import Candidates from "../../components/Candidate";
import { ElectionContext } from "../../context/electionContext";
import AppButton from "../../common/button";
import {
  auth,
  firestore_sendSignInLinkToEmail,
  firestore_isSignInWithEmailLink,
} from "../../firebase";

import { TOKEN } from "../../utils/constants";

function Home() {
  const { candidates } = useContext(ElectionContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <NavLink to="/login">Login</NavLink>
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
            <NavLink to="/login">Login</NavLink>
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
