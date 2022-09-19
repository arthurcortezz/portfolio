import { Flex, Text } from "@chakra-ui/react";
import SimplePanel from "../panel/simplePanel";
import SimpleText from "../text/simpleText";

export default function ProjectsPage() {
  return (
    <Flex>
      <Flex textAlign={"center"} p={"20px"} w={"100%"} direction={"column"}>
        <SimpleText text={"Projects Page"} size={22} />
        <Flex>
          <SimplePanel />
        </Flex>
      </Flex>
    </Flex>
  );
}
