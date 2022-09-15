import { Flex, Link, Image, Box } from "@chakra-ui/react";
import { SimpleText } from "../";

export default function HomePage() {
  return (
    <>
      <Flex direction={"column"} textAlign={"center"}>
        <SimpleText text={"Home Page"} size={26} />
      </Flex>
      <Flex direction={"column"} align={"center"} p={"30px"}>
        <Flex w={"50%"} direction={"row"} align={"center"} justifyContent={"space-between"}>
          <Flex>
            <Image maxWidth={"250px"} alt="img" src="indice.jpg" />
          </Flex>
          <Flex>
            <SimpleText size={22} text={"Arthur de Omena Cortez"} />
          </Flex>
        </Flex>
        <Flex direction={"column"} w={"initial"} textAlign={"center"} mt={"50px"}>
          <SimpleText
            text={[
              "Programming languages used in this website:",
              "JavaScript, ",
              "TypeScript,",
              "HTML,",
              "CSS",
              "Data base: NoSQL MongoDB",
              "Frontend development with framework ReactJS",
              "Backend development with framework NodeJS",
            ]}
          />
        </Flex>
      </Flex>
    </>
  );
}
