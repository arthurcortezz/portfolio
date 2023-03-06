import { Flex, useMediaQuery } from "@chakra-ui/react";
import { SimpleText, SimplePanel, FlexMotion } from "../";
import { MyProjects } from "../types";

export default function ProjectsPage() {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  let projects: Array<MyProjects> = [
    {
      src: "formulario.png",
      text: "AC Systems(Form Validator)",
      url: "https://637cd85e5ad26228a5d92d79--ubiquitous-raindrop-f6306f.netlify.app",
    },
    {
      src: "barbearia.png",
      text: "Black Jack(Static Page)",
      url: "https://barbearia-acsystems.vercel.app/",
    },
  ];

  return (
    <FlexMotion>
      <Flex>
        <Flex textAlign={"center"} p={"20px"} w={"100%"} direction={"column"}>
          <SimpleText text={"Projects Page"} size={22} />
          <Flex display="inline-block">
            {projects.map((item, key) => {
              return <SimplePanel width={isLargerThan ? "45%" : "100%"} url={item.url} text={item.text} key={key} src={item.src} />;
            })}
          </Flex>
        </Flex>
      </Flex>
    </FlexMotion>
  );
}
