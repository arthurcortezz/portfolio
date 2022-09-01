import { Flex, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  size?: number;
  color?: string;
  w?: string;
}
export default function SimpleText({ w, color, text, size }: Props) {
  return (
    <Text color={color ? color : "black"} fontSize={size ? size : 18} w={w ? w : "100%"}>
      {text}
    </Text>
  );
}
