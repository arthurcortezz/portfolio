import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Input, SimpleButton, ServiceMessage } from "../";
export default function CommentPage() {
  const [comment, setComment] = useState<string>("");
  const createComment = async (data: object) => {
    const commentFormat: any = {
      comment,
    };
    try {
      if (comment === "") {
        console.log("positivo");
      } else throw "ERRO";
    } catch (error: any) {
      console.log("🚀 ~ file: commentPage.tsx ~ line 15 ~ createComment ~ error", error);
      ServiceMessage.error("TESTE");
    }
  };
  return (
    <Flex direction={"column"} textAlign={"center"} mt={"100px"}>
      <Flex
        w={"100%"}
        direction={"column"}
        h={"full"}
        align={"center"}
        justifyContent={"space-between"}>
        <Input
          name={"Leave a comment, a suggestion or even a criticism about the developed page!"}
          label={"Write here you comment"}
          value={comment}
          onChange={(e: any) => setComment(e.target.value)}
        />
        <Flex mt={"20px"}>
          <SimpleButton
            name={"Send"}
            onClick={() => {
              createComment({ comment });
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
