import { Flex, Text } from "@chakra-ui/react";
import { Button, Container } from "../components";
import { ILinkProps } from "../components/types";

interface Props {
  setLogin: Function;
}
export default function Manager({ setLogin }: Props) {
  let LinkItems: Array<ILinkProps> = [
    {
      id: "home",
      name: "Home",
      render: <></>,
      active: true,
      mode: "link",
    },
  ];
  return <Container linkItems={LinkItems} />;
}
