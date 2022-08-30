import { Flex, Text } from "@chakra-ui/react";
import { Container, Button } from "../../";

interface Props {
  value: string;
  setLogin: Function;
}
export default function Menu({ setLogin, value }: Props) {
  return (
    <>
      <Flex w={"100%"}>
        <Flex w="50%" justifyContent={"center"}>
          <Text textAlign={"center"} fontWeight={600}>
            {value}
          </Text>
          <Button name={"Enviar"} onClick={() => setLogin("auth")} />
        </Flex>
      </Flex>
    </>
  );
}
