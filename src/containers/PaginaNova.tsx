import { BiArrowBack } from "react-icons/bi";
import { isMobile } from "react-device-detect";
import { FlexProps, Flex, Icon, Box, Image } from "@chakra-ui/react";

interface Props extends FlexProps {
  onClickBack?: () => void;
  semIcone?: boolean;
  childrenHeader?: JSX.Element;
  semPolitica?: boolean;
}

export default function PaginaBrancoContainer({ children, onClickBack, semIcone, childrenHeader, semPolitica, display, ...res }: Props) {
  return (
    <Flex direction={"column"} minHeight={"100vh"} bg={"background.common"} maxWidth="100%" display={display}>
      <Flex
        bg="teal.400"
        w="100%"
        h={isMobile ? "9vh" : "15vh"}
        borderBottomLeftRadius={"60% 8%"}
        borderBottomRightRadius={"60% 8%"}
        position={"absolute"}
        zIndex={0}
        justifyContent={"center"}
        alignItems={"center"}
        px={3}
        py={1}>
        <Flex w="100%" h="full" alignItems={"center"} justifyContent={onClickBack ? "space-between" : "flex-end"}>
          {onClickBack && (
            <Icon as={BiArrowBack} fontSize={"30px"} onClick={() => onClickBack && onClickBack()} position={"static"} cursor={"pointer"} />
          )}

          {childrenHeader}
          {!semIcone && (
            <Box>
              <Image alt="Logo" objectFit="fill" src="/logos/logonomebranco.png" maxWidth={isMobile ? "10vh" : "15vh"} height={{ base: "auto" }} />
            </Box>
          )}
        </Flex>
      </Flex>
      <Flex
        w={{ base: "100%" }}
        // h={isMobile ? "89vh" : "83vh"}
        h={"full"}
        mt={isMobile ? "9vh" : "15vh"}
        direction="column"
        {...res}
        mb={10}>
        {children}
      </Flex>
    </Flex>
  );
}
