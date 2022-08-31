import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ILinkProps } from "../types";
import { TopMenu, BottomMenu } from "../";

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
      <BottomMenu value={value} linkItems={linkItems} onClickMenu={onClickMenu} />
      <Flex direction={"column"} align={"center"} bg={"#202020"}>
        {children}
      </Flex>
    </Flex>
  );
}
