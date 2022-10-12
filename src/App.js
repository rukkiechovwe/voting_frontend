import { Box, ChakraProvider } from "@chakra-ui/react";
import Router from "./router";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className="App">
        <Router />
      </Box>
    </ChakraProvider>
  );
}

export default App;
