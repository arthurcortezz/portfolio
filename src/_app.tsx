import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import "../components/Chatbot/Chat.css";
import "../styles/styles.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp() {
  return (
    <>
      <Head>
        <title>Portfólio</title>
      </Head>
      <ChakraProvider resetCSS={true} theme={theme}></ChakraProvider>
    </>
  );
}

export default MyApp;
