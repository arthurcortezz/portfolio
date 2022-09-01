import { Flex, Spinner, useBoolean, useMediaQuery } from "@chakra-ui/react";
import { ILinkProps } from "../types";
import { Menu } from "..";
import { useState } from "react";

interface Props {
  linkItems: ILinkProps[];
}

export default function Container({ linkItems }: Props) {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  const [loader, setLoader] = useBoolean(false);
  const [renderItem, setRenderItem] = useState<ILinkProps | undefined | null>(linkItems[0]);
  const render = (link: ILinkProps) => {
    if (link.active) {
      setRenderItem(null);
      setRenderItem(link);
      setLoader.on;
    }
  };
  return (
    <Menu
      linkItems={linkItems}
      value={renderItem}
      onClickMenu={(link: ILinkProps) => {
        if (link && link.render) render(link);
      }}>
      {loader ? (
        <Spinner color="black" label="loading" />
      ) : (
        <Flex minH={"100vh"} bg={"#e6e6e6"} w={isLargerThan ? "70%" : "100%"} direction={"column"}>
          {renderItem?.render}
        </Flex>
      )}
    </Menu>
  );
}
