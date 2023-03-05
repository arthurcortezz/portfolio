import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arthur Cortez</title>
        <link rel="icon" type="imagem/png" href="icon.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer theme="dark" />
      </ChakraProvider>
    </>
  );
}
