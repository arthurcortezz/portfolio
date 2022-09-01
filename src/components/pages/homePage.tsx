import { Flex, Link, Image, Box } from "@chakra-ui/react";
import { SimpleText } from "../";

export default function HomePage() {
  return (
    <>
      <Flex direction={"column"} textAlign={"center"}>
        <SimpleText text={"Home Page"} size={26} />
      </Flex>
      <Flex direction={"column"} align={"center"} p={"30px"}>
        <Flex direction={"row"}>
          <Link href={"/"}>
            <Image maxWidth={"100px"} alt="img" src="indice.jpg" />
          </Link>
          <Flex direction={"column"} p={"15px"}>
            <SimpleText size={22} text={"Arthur de Omena Cortez"} />
            <SimpleText
              size={20}
              text={"Sometimes, when I'm in the right mood, I make web pages."}
            />
            <SimpleText size={20} text={"Or something."} />
          </Flex>
        </Flex>
        <Flex direction={"column"} w={"auto"} textAlign={"start"} m={"20px"}>
          <SimpleText text={"Programming languages used in this website:"} />
          <SimpleText text={"JavaScript, "} />
          <SimpleText text={"TypeScript,"} />
          <SimpleText text={"HTML,"} />
          <SimpleText text={"CSS"} />
          <SimpleText text={"Data base: NoSQL MongoDB"} />
          <SimpleText text={"Frontend development with framework ReactJS"} />
          <SimpleText text={"Backend development with framework NodeJS"} />
        </Flex>
      </Flex>
    </>
  );
}
