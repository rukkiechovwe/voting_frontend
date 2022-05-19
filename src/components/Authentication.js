import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

function Authentication({ children }) {
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
      <form>
        <Box
          w={{ base: "100%", sm: "500px", md: "530px" }}
          p="30px"
          bg="#fff"
          boxShadow=" 0px 0px 50px rgba(0, 0, 0, 0.05)"
        >
          <Heading mb="30px" as="h1" color="brand.primary" textAlign="center">
            LOGO
          </Heading>
          {children}
        </Box>
      </form>
    </Flex>
  );
}

export default Authentication;
