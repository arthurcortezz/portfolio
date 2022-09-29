import { Flex, useMediaQuery } from "@chakra-ui/react";
import { SimpleText, SimplePanel, FlexMotion } from "../";
import { MyProjects } from "../types";

export default function ProjectsPage() {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  let projects: Array<MyProjects> = [
    {
      src: "ac_systems.png",
      text: "AC Systems(Form Validator)",
    },
    {
      src: "black_jack.png",
      text: "Black Jack(Static Page)",
    },
  ];

  return (
    <FlexMotion>
      <Flex>
        <Flex textAlign={"center"} p={"20px"} w={"100%"} direction={"column"}>
          <SimpleText text={"Projects Page"} size={22} />
          <Flex display="inline-block">
            {projects.map((item, key) => {
              return (
                <SimplePanel
                  width={isLargerThan ? "45%" : "100%"}
                  text={item.text}
                  key={key}
                  src={item.src}
                />
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </FlexMotion>
  );
}
