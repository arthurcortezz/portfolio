import { Flex, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  size?: number;
  color?: string;
}
export default function SimpleText({ color, text, size }: Props) {
  return (
    <Text color={color ? color : "black"} fontSize={size ? size : 18}>
      {text}
    </Text>
  );
}
