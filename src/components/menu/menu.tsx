import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ILinkProps } from "../types";
import { TopMenu, SideMenu } from "../";

interface Props {
  linkItems: ILinkProps[];
  children: ReactNode;
  onClickMenu?: (link: ILinkProps) => void;
  value?: ILinkProps | null;
}
export default function MainMenu({ onClickMenu, value, linkItems, children }: Props) {
  return (
    <Flex direction={"column"}>
      <TopMenu />
      <SideMenu value={value} linkItems={linkItems} onClickMenu={onClickMenu} />
      <Flex w={"100%"} direction={"column"}>
        {children}
      </Flex>
    </Flex>
  );
}
