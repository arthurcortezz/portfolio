import { PanelImage, SimpleText } from "../";
import { Flex } from "@chakra-ui/react";

export default function SimplePanel() {
  return (
    <Flex w={"33%"} overflow={"hidden"}>
      <PanelImage src={"steam.png"} />
    </Flex>
  );
}
