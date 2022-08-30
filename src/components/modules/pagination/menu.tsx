import { Box, Flex, Image, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ILinkProps } from "../../types";

interface Props {
  linkItems: ILinkProps[];
  children: ReactNode;
}
export default function Menu({ linkItems, children, ...rest }: Props) {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <>
      <Flex pos="fixed" w={"100%"} borderBottom={"1px solid #393939"} bg={"#202020"} p={"0px 20px"} h={"51px"} justifyContent={"center"}>
        <Flex justify={"center"} w="100%" maxWidth={"1200px"}>
          <Flex w="20%">
            {isLargerThan ? (
              <Flex minWidth={"171px"} h={"100%"} border={"1px solid #393939"} borderTop={"none"} justify={"center"} align={"center"}>
                <Link fontSize={"12px"} color={"white"}>
                  SIGN IN | JOIN
                </Link>
              </Flex>
            ) : (
              <Flex w={"100%"} h={"100%"} border={"1px solid #393939"} borderTop={"none"} justify={"center"} align={"center"}>
                <Link href="/" justifyContent={"center"}>
                  <Image maxWidth={"35px"} alt="img" src="menu.png" />
                </Link>
              </Flex>
            )}
          </Flex>
          <Flex w="60%" borderTop={"none"} justify="center">
            <Link href="/">
              <Image maxWidth={"50px"} alt="img" src="logo.png" />
            </Link>
          </Flex>
          <Flex w="20%" justify={"end"}>
            <Flex w={"100%"} border={"1px solid #393939"} borderTop={"none"}>
              <Flex m={"0px 10px"} justify={"center"} align={"center"} w={"100%"}>
                {isLargerThan ? (
                  <Flex direction={"column"} textAlign="center">
                    <Link href="https://github.com/arthurcortezz">
                      <Text fontSize={"12px"} fontWeight={"bold"} fontFamily={"Roboto Bold"}>
                        ARTHUR CORTEZ
                      </Text>
                      <Text fontSize={"12px"}>FOLLOW ON GIT</Text>
                    </Link>
                  </Flex>
                ) : (
                  <Link href="https://github.com/arthurcortezz">
                    <Image maxWidth={"40px"} alt={"git"} src="git.png" />
                  </Link>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Box mt={"51px"} display={{ base: "none", md: "block" }}>
          <Box
            transition="0.5s ease"
            bg={"#202020"}
            borderRight="1px"
            borderRightColor={"gray.200"}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            overflowX={"hidden"}
            overflowY={"auto"}
            {...rest}>
            {linkItems.map((item: ILinkProps, index) => {
              return (
                <Box key={index} as={"button"} w="100%" _hover={{ bg: "black" }}>
                  <Text color={"white"}>{item.name}</Text>
                </Box>
              );
            })}
          </Box>
          <Flex ml={{ base: 0, md: 60 }} direction={"column"} minH="100vh" overflowY={"clip"} overflowX={"hidden"}>
            {children}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
