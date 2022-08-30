import { Button, Flex, Spinner, Text, useBoolean } from "@chakra-ui/react";
import { ILinkProps } from "../../types";
import { Menu } from "../..";

interface Props {
  linkItems: ILinkProps[];
}
export default function Container({ linkItems }: Props) {
  const [loader, setLoader] = useBoolean(false);
  return (
    <Menu linkItems={linkItems}>
      {loader ? (
        <Spinner color="black" label="loading" />
      ) : (
        // <>{router.push(LinkItems.href)}</>
        <Flex>
          <Text color={"black"}>Hello World</Text>
          <Button onClick={() => setLoader.on()} />
        </Flex>
      )}
    </Menu>
  );
}
