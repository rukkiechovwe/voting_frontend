import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function EmailAuth() {
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
      <Box
        w={{ base: "100%", sm: "500px", md: "530px" }}
        p="30px"
        bg="#fff"
        boxShadow=" 0px 0px 50px rgba(0, 0, 0, 0.05)"
        textAlign="center"
        fontSize="16px"
      >
        <Heading
          mb="30px"
          as="h6"
          color="brand.primary"
          fontSize="22px"
          fontFamily="GTWalsheim"
          fontWeight="100"
        >
          Email Authentication
        </Heading>
        <Text>We have sent you an email verification link</Text>
        <Text>Click on the link to continue the voting process.</Text>
      </Box>
    </Flex>
  );
}

export default EmailAuth;
