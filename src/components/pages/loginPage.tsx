import { Flex, Text } from "@chakra-ui/react";
import { SimpleButton, SimpleText, Input, FlexMotion } from "../";
import { LoginController } from "../../controllers";
import { useState } from "react";

export default function LoginPage() {
  const [pass, setPass] = useState<string>("");
  const [user, setUser] = useState<string>("");

  const handleClick = async () => {
    try {
      if (user && pass) {
        const result = await LoginController.makeLogin({ user: user, pass: pass });
      }
    } catch (error) {}
  };

  return (
    <Flex textAlign={"center"} direction={"column"} align={"center"} p={"20px"}>
      <SimpleText text={"Make login"} size={22} />
      <Input
        name={"Username"}
        label={"Enter you username"}
        value={user}
        onChange={(e: any) => setUser(e.target.value)}
      />
      <Input
        name={"Password"}
        label={"Enter you password"}
        value={pass}
        onChange={(e: any) => setPass(e.target.value)}
      />
      <Flex mt={"30px"}>
        <SimpleButton name={"Confirm"} onClick={() => handleClick()} />
      </Flex>
    </Flex>
  );
}
