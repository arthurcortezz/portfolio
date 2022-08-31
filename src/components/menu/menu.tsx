import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ILinkProps } from "../types";
import { TopMenu, SideMenu } from "../";

interface Props {
  linkItems: ILinkProps[];
  children: ReactNode;
  onClickMenu?: (link: ILinkProps) => void;
}
export default function MainMenu({ onClickMenu, linkItems, children }: Props) {
  return (
    <>
      <Flex>
        <TopMenu />
        <Box mt={"51px"} display={{ base: "none", md: "block" }}>
          <SideMenu linkItems={linkItems} onClickMenu={onClickMenu} />
          <Flex ml={{ base: 0, md: 60 }} direction={"column"} minH="100vh" overflowY={"clip"} overflowX={"hidden"}>
            {children}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
