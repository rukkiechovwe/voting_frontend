import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import ElectionContextProvider from "./context/electionContext";
import Router from "./router";
import { theme } from "./theme";
import { TOKEN } from "./utils/constants";
import { StudentContext } from "./context/studentContext";

function App() {
  const { hasToken, getToken } = useContext(StudentContext);

  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem(TOKEN);
    if (savedToken) {
      getToken(true);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <ElectionContextProvider>
      <ChakraProvider theme={theme}>
        <Box className="App">
          <Router hasToken={hasToken} />
        </Box>
      </ChakraProvider>
    </ElectionContextProvider>
  );
}

export default App;
