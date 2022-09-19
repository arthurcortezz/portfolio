import { Flex, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  size?: number;
  color?: string;
  w?: string;
  positionFlex?: "relative" | "absolute";
  opacity?: string;
}
export default function PanelText({ w, color, text, size, positionFlex, opacity }: Props) {
  return (
    <Flex direction={"row"} justify={"center"}>
      <Text
        _groupHover={{ opacity: 1 }}
        opacity={0}
        position={positionFlex ? positionFlex : "relative"}
        color={color ? color : "black"}
        fontSize={size ? size : 18}
        top={"40%"}
        w={w ? w : ""}
        fontWeight={400}
        bg={"white"}
        fontFamily={"Lucida Sans Typewriter"}>
        {text}
      </Text>
    </Flex>
  );
}
