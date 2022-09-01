import { Flex, Text } from "@chakra-ui/react";
import { SimpleText } from "../";

export default function HomePage() {
  return (
    <>
      <Flex direction={"column"} align={"center"}>
        <SimpleText text={"Home Page"} size={26} />
      </Flex>
      <Flex direction={"column"} align={"left"} p={"30px"}>
        <SimpleText text={"Programming languages ​​used:"} />
        <SimpleText text={"JavaScript, "} />
        <SimpleText text={"TypeScript,"} />
        <SimpleText text={"HTML,"} />
        <SimpleText text={"CSS"} />
        <SimpleText text={"Data base: NoSQL MongoDB"} />
        <SimpleText text={"Frontend development with framework ReactJS"} />
        <SimpleText text={"Backend development with framework NodeJS"} />
      </Flex>
    </>
  );
}
