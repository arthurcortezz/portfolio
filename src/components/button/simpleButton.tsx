import { Box, BoxProps, HStack, Text } from "@chakra-ui/react";

interface Props extends BoxProps {
  name: string;
  bg?: string;
  onClick?: (e: any) => void;
}
export default function SimpleButton({ name, bg, onClick, ...res }: Props) {
  return (
    <Box
      as={"button"}
      w={"400px"}
      border="gray solid 1px"
      borderRadius={5}
      px={2}
      py={0}
      bg={bg ?? "green.400"}
      color={"white"}
      onClick={onClick}
      {...res}>
      <HStack w="100%" direction={"row"} alignItems={"center"}>
        {name !== "" && <Text fontWeight="600">{name}</Text>}
      </HStack>
    </Box>
  );
}
