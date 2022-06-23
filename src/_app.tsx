import Head from "next/head";
import { useState } from "react";
// import { pdfjs } from "react-pdf";
import type { AppProps } from "next/app";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { Button, ChakraProvider, Text, useMediaQuery } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { ToastContainer } from "react-toastify";
import "../components/Chatbot/Chat.css";
import "../styles/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { PaginaNova, PaginaVazia, ManutencaoPage, FooterPreview } from "./components";

function MyApp({ Component, pageProps }: AppProps) {
  const [manutencao, setManutencao] = useState<boolean>(false);
  const [aviso, setAviso] = useState<boolean>(true);
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <Head>
        <title>AppDesenvolve-AL</title>
      </Head>
      <ChakraProvider resetCSS={true} theme={theme}>
        {manutencao && <ManutencaoPage />}
        {!manutencao && !aviso && <Component {...pageProps} />}
        {!manutencao && aviso && (
          <PaginaNova semIcone={false} alignItems={"center"}>
            <PaginaVazia alignItems={"center"}>
              <Text m="8" fontSize={isLargerThan1280 ? "24" : "24"} color="black">
                {`Este aplicativo está em fase de testes, para fazer uma solicitação de crédito entre contato através do número (82) 3315-3468.`}
              </Text>
              <Button colorScheme="blue" bg="blue.400" onClick={() => setAviso(false)}>
                Entendi
              </Button>
            </PaginaVazia>
          </PaginaNova>
        )}
        <ToastContainer />
        {!pageProps.blockFooter && <FooterPreview />}
      </ChakraProvider>
    </>
  );
}

export default MyApp;
