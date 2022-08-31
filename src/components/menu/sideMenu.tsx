import { Box, Text } from "@chakra-ui/react";
import { ILinkProps } from "../types";

interface Props {
  linkItems: ILinkProps[];
  onClickMenu?: (link: ILinkProps) => void;
}
export default function SideMenu({ onClickMenu, linkItems, ...rest }: Props) {
  return (
    <Box
      transition="0.5s ease"
      bg={"#202020"}
      borderRight="1px"
      borderRightColor={"gray.200"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      overflowX={"hidden"}
      overflowY={"auto"}
      {...rest}>
      {linkItems.map((item: ILinkProps, index) => {
        return (
          <Box key={index} as={"button"} onClick={() => onClickMenu && onClickMenu(item)} w="100%" _hover={{ bg: "black" }}>
            <Text color={"white"}>{item.name}</Text>
          </Box>
        );
      })}
    </Box>
  );
}
