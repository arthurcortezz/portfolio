import { Flex, Image } from "@chakra-ui/react";
import SimpleText from "../text/simpleText";

interface Props {
  src: string;
}
export default function PanelImage({ src }: Props) {
  return (
    <Flex
      w={"100%"}
      direction={"column"}
      display={"inline-block"}
      position={"relative"}
      align={"center"}
      transition={"transform .5s ease"}
      _hover={{ transform: "scale(1.1)" }}>
      <SimpleText positionFlex={"absolute"} text={"TESTE"} />
      <Image src={src} alt="img" />
    </Flex>
  );
}
