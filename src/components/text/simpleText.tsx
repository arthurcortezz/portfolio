import { Flex, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  size?: number;
  color?: string;
  w?: string;
  positionFlex?: "relative" | "absolute";
}
export default function SimpleText({ w, color, text, size, positionFlex }: Props) {
  let string = "";
  let array: any = [];
  typeof text === "string" ? (string = text) : (array = text);
  return (
    <>
      <Text
        position={positionFlex ? positionFlex : "relative"}
        color={color ? color : "black"}
        fontSize={size ? size : 18}
        w={w ? w : "100%"}>
        {string && string}
      </Text>
    </>
  );
}
