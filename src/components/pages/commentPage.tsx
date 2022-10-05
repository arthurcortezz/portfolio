import { Flex, Spinner, useBoolean } from "@chakra-ui/react";
import React, { useState } from "react";
import { Input, SimpleButton, MessageToast, SimpleText, FlexMotion } from "../";
import { CommentController } from "../../controllers";
import { validationComment } from "../../validators";
import "react-toastify/dist/ReactToastify.css";

interface teste {
  name: string;
  reason: string;
  message: string;
}
interface resposta {
  data: teste;
  status: number;
}
export default function CommentPage() {
  const [loader, setLoader] = useBoolean(false);
  const [name, setName] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const createComment = async (name: string, reason: string, message: string) => {
    try {
      setLoader.on();
      const valid = await validationComment({ name, reason, message });
      if (valid.valid) {
        const response = await CommentController.createComment(valid.object);
        MessageToast.sucess("Thanks for the comment " + response);
      }
      setReason("");
      setMessage("");
      setName("");
      setLoader.off();
    } catch (error: any) {
      MessageToast.error(error.message);
      setLoader.off();
    }
  };
  return (
    <Flex direction={"column"} textAlign={"center"}>
      {loader ? (
        <Spinner color="black" />
      ) : (
        <Flex
          p={"30px"}
          w={"100%"}
          direction={"column"}
          h={"full"}
          align={"center"}
          justifyContent={"space-between"}>
          <SimpleText text={"Leave a comment, a suggestion or even a criticism about this page!"} />
          <Flex mt={"100px"} w={"100%"} align={"center"} justify={"center"} direction={"column"}>
            <Input
              name={"Your name: "}
              label={"Write here you name"}
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <Input
              name={"Reason for comment: "}
              label={"Write here you reason"}
              value={reason}
              onChange={(e: any) => setReason(e.target.value)}
            />
            <Input
              name={"Message: "}
              label={"Write here you comment"}
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
            />
          </Flex>
          <Flex mt={"20px"}>
            <SimpleButton
              name={"Send"}
              onClick={() => {
                createComment(name, reason, message);
              }}
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
