import { Flex } from "@chakra-ui/react";
import { ILinkProps } from "../types";
import { BottomMenuItem } from "..";

interface Props {
  value?: ILinkProps | null;
  linkItems: ILinkProps[];
  onClickMenu?: (link: ILinkProps) => void;
}
export default function BottomMenu({ onClickMenu, value, linkItems, ...rest }: Props) {
  return (
    <Flex
      transition="0.5s ease"
      bg={"#202020"}
      w={"full"}
      borderBottom={"1px solid gray"}
      overflowX={"hidden"}
      overflowY={"auto"}
      {...rest}>
      {linkItems.map((item: ILinkProps, index) => {
        return <BottomMenuItem onClickMenu={onClickMenu} item={item} value={value} key={index} />;
      })}
    </Flex>
  );
}
