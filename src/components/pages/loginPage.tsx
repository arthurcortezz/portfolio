import { Flex, Text } from "@chakra-ui/react";
import { SimpleButton, SimpleText, Input, FlexMotion } from "../";
import { LoginController } from "../../controllers";
import { useState } from "react";

export default function LoginPage() {
  const [page, setPage] = useState<string>("login");
  const [pass, setPass] = useState<string>("");
  const [user, setUser] = useState<string>("");

  const handleClickLogin = async () => {
    if (user && pass) {
      const result = await LoginController.makeLogin({ user: user, pass: pass });
    }
  };
  const handleClickRegister = async () => {
    if (user && pass) {
      const result = await LoginController.makeRegister({ user: user, pass: pass });
    }
  };

  return (
    <>
      {page && page === "login" ? (
        <Flex textAlign={"center"} direction={"column"} align={"center"} p={"20px"}>
          <SimpleText text={"Make login"} size={22} />
          <Input name={"Username"} label={"Enter you username"} value={user} onChange={(e: any) => setUser(e.target.value)} />
          <Input name={"Password"} label={"Enter you password"} value={pass} onChange={(e: any) => setPass(e.target.value)} />
          <Flex as={"button"} onClick={() => setPage("register")}>
            <SimpleText text={"Don't have a account? Register here!"} />
          </Flex>
          <Flex mt={"10px"}>
            <SimpleButton name={"Confirm"} onClick={() => handleClickLogin()} />
          </Flex>
        </Flex>
      ) : (
        <Flex textAlign={"center"} direction={"column"} align={"center"} p={"20px"}>
          <SimpleText text={"Make register"} size={22} />
          <Input name={"Username"} label={"Enter you username"} value={user} onChange={(e: any) => setUser(e.target.value)} />
          <Input name={"Password"} label={"Enter you password"} value={pass} onChange={(e: any) => setPass(e.target.value)} />
          <Flex as={"button"} onClick={() => setPage("login")}>
            <SimpleText text={"Already have an account? Login here!"} />
          </Flex>
          <Flex mt={"10px"}>
            <SimpleButton name={"Confirm"} onClick={() => handleClickRegister()} />
          </Flex>
        </Flex>
      )}
    </>
  );
}
