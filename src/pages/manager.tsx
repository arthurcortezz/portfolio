import router from "next/router";
import { Flex, Spinner, Text, useBoolean } from "@chakra-ui/react";
import { Button, Container } from "../components";
import { ILinkProps } from "../components/types";

interface Props {}
export default function Manager({}: Props) {
  const [loader, setLoader] = useBoolean(false);
  let LinkItems: Array<ILinkProps> = [
    {
      id: "home",
      name: "Home",
      render: <></>,
      active: true,
      mode: "link",
    },
    {
      id: "git",
      name: "GitHub",
      render: <></>,
      active: true,
      mode: "link",
    },
    {
      id: "personal_info",
      name: "Personal Info",
      render: <></>,
      active: true,
      mode: "link",
    },
    {
      id: "leave_a_comment",
      name: "Leave a Comment",
      render: <></>,
      active: true,
      mode: "link",
    },
  ];
  return <Container linkItems={LinkItems} />;
}
