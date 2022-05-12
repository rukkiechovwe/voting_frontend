import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function EmailAuth() {
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
          Email Authentication
        </Heading>
        <Text>We have sent you an email verification link</Text>
        <Text>Click on the link to continue the voting process.</Text>
      </Flex>
    </Box>
  );
}

export default EmailAuth;
