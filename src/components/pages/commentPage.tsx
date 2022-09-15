import { Flex, Spinner, useBoolean } from "@chakra-ui/react";
import React, { useState } from "react";
import { Input, SimpleButton, MessageToast, SimpleText } from "../";
import { CommentController } from "../../controllers";
import { validationComment } from "../../validators";
import "react-toastify/dist/ReactToastify.css";

export default function CommentPage() {
  const [loader, setLoader] = useBoolean(false);
  const [comment, setComment] = useState<string>("");

  const createComment = async (message: string) => {
    try {
      setLoader.on();
      const valid = await validationComment({ message });
      if (valid.valid) CommentController.createComment(message);
      setLoader.off();
    } catch (error: any) {
      MessageToast.error(error.title);
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
          <Flex mt={"100px"} w={"100%"} justify={"center"}>
            <Input
              name={"Message: "}
              label={"Write here you comment"}
              value={comment}
              onChange={(e: any) => setComment(e.target.value)}
            />
          </Flex>
          <Flex mt={"20px"}>
            <SimpleButton
              name={"Send"}
              onClick={() => {
                createComment(comment);
              }}
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
