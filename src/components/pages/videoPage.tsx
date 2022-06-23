import router from "next/router";
import React from "react";
import { SideBar } from "..";
import { useState } from "react";

import { ICategoria, IVideos } from "../../types";
import { useMediaQuery, Accordion, AccordionButton, AccordionItem, AccordionPanel, AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function TutorialVideo() {
  const [isLargerThan] = useMediaQuery("(min-width: 1020px)");
  const handleClickBack = () => {
    router.back();
  };
  const [urlLink, setUrlLink] = useState<string>("");
  const [name, setName] = useState<string>("Selecione uma de nossas aulas!");
  const clickVideo = (urlLink: string, name: string) => {
    setUrlLink(urlLink);
    setName(name);
  };

  let categorias: ICategoria[] = [
    {
      nome: "aulas",
      titulo: "Vídeo Aulas",
    },
  ];
  let videos: IVideos[] = [
    {
      nome: "aula1",
      titulo: "Tutorial do aplicativo para Android.",
      link: "https://www.youtube.com/embed/bIFa1CJVLHU",
      categoria: "aulas",
    },
    {
      nome: "aula2",
      titulo: "Tutorial do aplicativo para Iphone.",
      link: "https://www.youtube.com/embed/1x8NL-OeURU",
      categoria: "aulas",
    },
  ];

  return (
    <Flex>
      <Flex flexDirection={isLargerThan ? "row" : "column-reverse"} w={"100%"} p={"10px"}>
        <Flex flexDirection={"column"} align={"center"} w={isLargerThan ? "30%" : "100%"} borderRadius={"5px"} p={"5px"}>
          <Heading color={"black"} fontSize={"14px"} textAlign={"center"} m={"20px"} marginTop={"0px"}>
            Selecione o vídeo!
          </Heading>
          <Flex direction={"column"} align={"center"} w={"100%"}>
            {categorias.map((c, key) => {
              return (
                <Accordion key={key} allowMultiple w={"100%"} borderRadius={"5px"}>
                  <AccordionItem w={"100%"} m={"0px 0px 10px"}>
                    <AccordionButton
                      _focus={{ outline: "none" }}
                      _expanded={{
                        color: "#00CED1",
                        border: "2px solid #00CED1",
                      }}
                      _hover={{ color: "#00CED1", border: "2px solid #00CED1" }}
                      p={"0px"}
                      color={"teal.400"}
                      border={"2px solid #26A69A"}
                      borderRadius={"5px"}>
                      <Box flex="1" textAlign="center">
                        <Text fontFamily={"Helvetica"} fontWeight={"bold"}>
                          {c.titulo}
                        </Text>
                      </Box>
                    </AccordionButton>
                    <AccordionPanel p={"0px"} m={"2px"} opacity={"0.8"}>
                      <Flex direction={"column"}>
                        {videos
                          .filter(v => v.categoria === c.nome)
                          .map((doc: IVideos, index: number) => {
                            return <SideBar key={index} doc={doc} onClick={() => clickVideo(doc.link, doc.titulo)} />;
                          })}
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </Flex>
        </Flex>
        <Flex w={"100%"} align={"center"} direction={"column"} textAlign={"center"}>
          <Heading size="md" textColor={"black"}>
            {name}
          </Heading>
          <Flex w={isLargerThan ? "70%" : "100%"} direction={"column"}>
            <AspectRatio ratio={14 / 8}>
              <iframe frameBorder="0" src={urlLink} allowFullScreen />
            </AspectRatio>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
