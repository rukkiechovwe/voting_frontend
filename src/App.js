import { Box, ChakraProvider } from "@chakra-ui/react";
import ElectionContextProvider from "./context/electionContext";
import Router from "./router";
import { theme } from "./theme";

function App() {
  return (
    <ElectionContextProvider>
      <ChakraProvider theme={theme}>
        <Box className="App">
          <Router />
        </Box>
      </ChakraProvider>
    </ElectionContextProvider>
  );
}

export default App;
