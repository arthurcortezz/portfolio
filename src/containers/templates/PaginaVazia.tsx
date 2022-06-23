import { Flex, FlexProps } from "@chakra-ui/react";

export default function ContainerEmBranco({ justifyContent, bg, direction, ...props }: FlexProps) {
  return <Flex w="100%" justifyContent={justifyContent || "center"} bg={bg || "background.common"} direction={direction || "column"} {...props} />;
}
