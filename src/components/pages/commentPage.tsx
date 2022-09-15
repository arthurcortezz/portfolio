import { Flex, Spinner, useBoolean } from "@chakra-ui/react";
import React, { useState } from "react";
import { Input, SimpleButton, MessageToast } from "../";
import { CommentController } from "../../controllers";
import "react-toastify/dist/ReactToastify.css";

export default function CommentPage() {
  const [loader, setLoader] = useBoolean(false);
  const [comment, setComment] = useState<string>("");

  const createComment = async (data: string) => {
    try {
      setLoader.on();
      CommentController.createComment(data);
      setLoader.off();
    } catch (error: any) {
      MessageToast.sucess(error);
      setLoader.off();
    }
  };
  return (
    <Flex direction={"column"} textAlign={"center"}>
      {loader ? (
        <Spinner color="black" />
      ) : (
        <Flex
          mt={"100px"}
          w={"100%"}
          direction={"column"}
          h={"full"}
          align={"center"}
          justifyContent={"space-between"}>
          <Input
            name={"Leave a comment, a suggestion or even a criticism about this page!"}
            label={"Write here you comment"}
            value={comment}
            onChange={(e: any) => setComment(e.target.value)}
          />
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
