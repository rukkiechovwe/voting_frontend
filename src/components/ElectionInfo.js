import {
  Box,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import AppButton from "../common/button";

function ElectionInfo({ onOpen }) {

  return (
    <Box
      w={{ base: "100%", sm: "500px", md: "600px" }}
      p="30px"
      bg="#fff"
      boxShadow=" 0px 0px 50px rgba(0, 0, 0, 0.05)"
      fontSize={{ base: "16px", sm: "18px" }}
    >
      <Text
        fontSize={{ base: "24px", md: "30px" }}
        fontFamily="GTWalsheim"
        mb="20px"
      >
        Election is Ongoing!
      </Text>
      <Text textAlign="left">
        To vote for your preferred candidates, read the following instructions
      </Text>
      <UnorderedList textAlign="left">
        <ListItem>You can only select one candidate per position</ListItem>
        <ListItem>
          Once you click on the start button, you can only submit your votes to
          end the voting process
        </ListItem>
        <ListItem>You cannot vote more than once</ListItem>
      </UnorderedList>
      <Text mt="30px" fontSize="16px">
        <em>Click the button to start Voting</em>
      </Text>
      <AppButton onClick={onOpen}>Start Voting</AppButton>
    </Box>
  );
}

export default ElectionInfo;
