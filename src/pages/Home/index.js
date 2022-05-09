import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Home() {
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
          Countdown...
        </Heading>
        <Text>Voting is yet to begin...</Text>
        <Text>We will inform you via email when voting has started.</Text>
      </Flex>
    </Box>
  );
}

export default Home;
