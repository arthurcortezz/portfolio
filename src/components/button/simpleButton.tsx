import { Box, BoxProps } from "@chakra-ui/react";
import SimpleText from "../text/simpleText";

interface Props extends BoxProps {
  name: string;
  bg?: string;
  onClick?: (e: any) => void;
}
export default function SimpleButton({ name, bg, onClick, ...res }: Props) {
  return (
    <Box
      as={"button"}
      w={"200px"}
      border="gray solid 1px"
      borderRadius={5}
      bg={bg ?? "green.400"}
      color={"white"}
      onClick={onClick}
      {...res}>
      {name !== "" && <SimpleText text={name}></SimpleText>}
    </Box>
  );
}
