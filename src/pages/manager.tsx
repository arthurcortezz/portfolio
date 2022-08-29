import { Flex, Text } from "@chakra-ui/react";
import { Button } from "../components";

interface Props {
  setLogin: Function;
}
export default function Manager({ setLogin }: Props) {
  return (
    <Flex w={"100%"}>
      <Text fontWeight={600}> Hello World !</Text>
      <Button name={"login"} onClick={() => setLogin("login")} />
    </Flex>
  );
}
