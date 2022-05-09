import React, { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function RegisterSucess() {
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
          Registration in progress
        </Heading>
        <Text>Please wait while we verify your details...</Text>
        <Text>We will get back to you via email.</Text>
      </Flex>
    </Box>
  );
}

export default RegisterSucess;
