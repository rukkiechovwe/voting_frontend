import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

function Authentication({ children }) {
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
      <Flex justifyContent="center" alignItems="center" w="100%">
        <form>
          <Flex
            h="auto"
            w="530px"
            p="30px"
            bg="#fff"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            boxShadow=" 0px 0px 50px rgba(0, 0, 0, 0.05)"
          >
            <Heading mb="30px" as="h1" color="brand.primary" textAlign="center">
              LOGO
            </Heading>
            {children}
          </Flex>
        </form>
      </Flex>
    </Box>
  );
}

export default Authentication;
