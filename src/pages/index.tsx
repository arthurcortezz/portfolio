import { Button, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Login } from "../components";
import Manager from "./manager";

export default function Home() {
  const [login, setLogin] = useState<string>("login");
  const showLogin = (value: any) => {
    if (login === "login") {
      return <Login setLogin={setLogin} value={value} />;
    }
    if (login === "auth") {
      return <Manager setLogin={setLogin} />;
    }
  };
  return showLogin(login);
}
