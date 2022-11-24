import { Flex, Text } from "@chakra-ui/react";
import { SimpleButton, SimpleText, Input, FlexMotion } from "../";
import { LoginController } from "../../controllers";
import { useState } from "react";

export default function LoginPage() {
  const [page, setPage] = useState<string>("login");
  const [pass, setPass] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleClickLogin = async () => {
    if (user && pass) {
      const result = await LoginController.makeLogin({ user: user, pass: pass });
      console.log("🚀 ~ file: loginPage.tsx ~ line 17 ~ handleClickLogin ~ result", result);
    }
  };
  const handleClickRegister = async () => {
    if (user && pass) {
      console.log("🚀 ~ file: loginPage.tsx ~ line 22 ~ handleClickRegister ~ user", user);
      const result = await LoginController.makeRegister({ user: user, email: email, phone: phone, pass: pass, confirmPass: confirmPass });
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
          <Input name={"Email"} label={"Enter you e-mail"} value={email} onChange={(e: any) => setEmail(e.target.value)} />
          <Input name={"Phone"} label={"Enter you phone number"} value={phone} onChange={(e: any) => setPhone(e.target.value)} />
          <Input name={"Password"} label={"Enter you password"} value={pass} onChange={(e: any) => setPass(e.target.value)} />
          <Input name={"Confirm Password"} label={"Confirm password"} value={confirmPass} onChange={(e: any) => setConfirmPass(e.target.value)} />
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
