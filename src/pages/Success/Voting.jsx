import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function VotingSuccess() {
  return (
    <Box
      minH="100vh"
      pos="fixed"
      w="100%"
      h="100%"
      py="30px"
      zIndex={2}
      top={0}
      left={0}
      bg="#fff"
      overflow="auto"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="100%"
      >
        <Heading mb="30px" as="h3" color="brand.primary" textAlign="center">
          Voting was successful
        </Heading>
        <Text>
          Thank you for voting for your favorite candidate. Be rest assured that
          your votes count.
        </Text>
      </Flex>
    </Box>
  );
}

export default VotingSuccess;
