import { Flex, FlexProps } from "@chakra-ui/react";
import { IVideos } from "../../types";

interface Props extends FlexProps {
  doc: IVideos;
}

export default function TutorialMenu({ doc, onClick }: Props) {
  return (
    <Flex
      as={"button"}
      fontSize={"13px"}
      fontWeight={"bold"}
      onClick={onClick}
      _hover={{ color: "#00CED1" }}
      textAlign={"left"}
      color={"black"}
      w={"100%"}
      m={"0px 0px 1px"}
      borderRadius={"2px"}
      border={"1px solid #00CED1"}
      p={"5px 10px"}>
      {doc.titulo}
    </Flex>
  );
}
