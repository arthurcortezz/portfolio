import { Flex, Spinner, useBoolean, useMediaQuery } from "@chakra-ui/react";
import { LinkProps } from "../types";
import { Menu } from "..";
import { useState } from "react";

interface Props {
  linkItems: LinkProps[];
}

export default function Container({ linkItems }: Props) {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  const [loader, setLoader] = useBoolean(false);
  const [renderItem, setRenderItem] = useState<LinkProps | undefined | null>(linkItems[0]);
  const render = (link: LinkProps) => {
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
      onClickMenu={(link: LinkProps) => {
        if (link && link.render) render(link);
      }}>
      {loader ? (
        <Spinner color="black" label="loading" />
      ) : (
        <>
          {renderItem && renderItem.subItems && (
            <Flex w={"100%"} bg={"red"}>
              Hello World
            </Flex>
          )}
          <Flex
            minH={"100vh"}
            bg={"#e6e6e6"}
            w={isLargerThan ? "70%" : "100%"}
            direction={"column"}>
            {renderItem?.render}
          </Flex>
        </>
      )}
    </Menu>
  );
}
