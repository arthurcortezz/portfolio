import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LinkProps } from "../types";
import { TopMenu, BottomMenu } from "../";

interface Props {
  linkItems: LinkProps[];
  children: ReactNode;
  onClickMenu?: (link: LinkProps) => void;
  value?: LinkProps | null;
}
export default function MainMenu({ onClickMenu, value, linkItems, children }: Props) {
  return (
    <Flex direction={"column"}>
      <TopMenu />
      <BottomMenu value={value} linkItems={linkItems} onClickMenu={onClickMenu} />
      <Flex mt={"90px"} direction={"column"} align={"center"} bg={"#202020"}>
        {children}
      </Flex>
    </Flex>
  );
}
