import { Flex, Text } from "@chakra-ui/react";

interface Props {
  text: string[];
  color?: string;
  size?: string;
  width?: string;
}
export default function ArrayText({ text, color, size, width }: Props) {
  return (
    <>
      {text &&
        text.map((item: any, key: any) => (
          <Flex key={key} direction={"column"} w={"100%"} textAlign={"left"}>
            <Text
              color={color ? color : "black"}
              fontSize={size ? size : 18}
              w={width ? width : "100%"}
              fontWeight={400}
              fontFamily={"Lucida Sans Typewriter"}>
              {item}
            </Text>
          </Flex>
        ))}
    </>
  );
}
