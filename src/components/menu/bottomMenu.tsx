import { Flex } from "@chakra-ui/react";
import { LinkProps } from "../types";
import { BottomMenuItem } from "..";

interface Props {
  value?: LinkProps | null;
  linkItems: LinkProps[];
  onClickMenu?: (link: LinkProps) => void;
}
export default function BottomMenu({ onClickMenu, value, linkItems, ...rest }: Props) {
  return (
    <Flex
      transition="0.5s ease"
      zIndex={4}
      h={"40px"}
      bg={"#202020"}
      w={"full"}
      borderBottom={"1px solid gray"}
      pos={"fixed"}
      mt={"50px"}
      overflowX={"hidden"}
      overflowY={"auto"}
      {...rest}>
      {linkItems.map((item: LinkProps, index) => {
        return <BottomMenuItem onClickMenu={onClickMenu} item={item} value={value} key={index} />;
      })}
    </Flex>
  );
}
