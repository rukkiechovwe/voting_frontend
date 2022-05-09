import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
// import Nav from "./components/nav";
import Router from "./router";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex className="App">
        {/* <Nav /> */}
        <Router />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
