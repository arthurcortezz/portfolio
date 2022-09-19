import { Box, Flex, Image } from "@chakra-ui/react";
import { PanelText } from "../";

interface Props {
  text: string;
  src: string;
  width?: string;
}
export default function PanelImage({ text, src, width }: Props) {
  return (
    <>
      <Flex
        m={"5px"}
        w={width}
        overflow={"hidden"}
        direction={"column"}
        display={"inline-block"}
        position={"relative"}
        align={"center"}
        cursor={"pointer"}>
        <PanelText positionFlex={"relative"} text={text} />
        <Image
          src={src}
          alt="img"
          _hover={{ transform: "scale(1.1)" }}
          transition={"transform .5s ease"}
        />
      </Flex>
    </>
  );
}
