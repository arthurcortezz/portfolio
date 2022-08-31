import { Flex, Spinner, useBoolean } from "@chakra-ui/react";
import { ILinkProps } from "../types";
import { Menu } from "..";
import { useState } from "react";

interface Props {
  linkItems: ILinkProps[];
}

export default function Container({ linkItems }: Props) {
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
        // <>{router.push(LinkItems.href)}</>
        <Flex>{renderItem?.render}</Flex>
      )}
    </Menu>
  );
}
