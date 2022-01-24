import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../styles/theme";

import { ContinentContextProvider } from "../contexts/ContinentsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContinentContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ContinentContextProvider>
  );
}

export default MyApp;
