import { Flex, Image } from "@chakra-ui/react";
import { SimpleText } from "../";

export default function HomePage() {
  return (
    <Flex direction={"column"} align={"center"} p={"30px"}>
      <Flex
        w={"50%"}
        direction={"column"}
        align={"center"}
        justifyContent={"space-between"}
        border={"1px solid #cecece"}
        borderRadius={"5px"}
        p={"5px"}
        bg={"#e3e3e3"}>
        <Image maxWidth={"250px"} alt="img" src="indice.jpg" />
        <Flex direction={"column"} textAlign={"center"}>
          <SimpleText size={22} text={"Arthur Cortez"} />
          <SimpleText size={18} text={"Web Developer"} />
        </Flex>
      </Flex>
      <Flex direction={"column"} w={"initial"} textAlign={"center"} mt={"20px"}>
        <SimpleText
          text={[
            "Programming languages used in this website:",
            "JavaScript, TypeScript, HTML, CSS",
            "Data base: NoSQL MongoDB",
            "Frontend development with framework ReactJS",
            "Backend development with framework NodeJS",
          ]}
        />
      </Flex>
    </Flex>
  );
}
