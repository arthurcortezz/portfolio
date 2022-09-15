import { Flex, Text } from "@chakra-ui/react";

interface Props {
  text: string[] | string;
  size?: number;
  color?: string;
  w?: string;
}
export default function SimpleText({ w, color, text, size }: Props) {
  let string = "";
  let array: any = [];
  typeof text === "string" ? (string = text) : (array = text);
  return (
    <>
      {array &&
        array.map((item: any, key: any) => (
          <Flex key={key} direction={"column"} w={"100%"} textAlign={"left"}>
            <Text color={color ? color : "black"} fontSize={size ? size : 18} w={w ? w : "100%"}>
              {item}
            </Text>
          </Flex>
        ))}
      <Text color={color ? color : "black"} fontSize={size ? size : 18} w={w ? w : "100%"}>
        {string && string}
      </Text>
    </>
  );
}
