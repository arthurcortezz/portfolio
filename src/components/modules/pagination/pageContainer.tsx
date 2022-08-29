import { Flex, Image, Link, Text, useMediaQuery } from "@chakra-ui/react";

interface Props {}
export default function Menu({}: Props) {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  return (
    <>
      <Flex borderBottom={"1px solid #393939"} bg={"#202020"} p={"0px 20px"} h={"51px"} justifyContent={"center"}>
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
      <Flex direction={"column"} bg={"#202020"} w={"15%"} h={"100vh"}>
        <Link href="/">
          <Text>Home</Text>
        </Link>
        <Link href="/">
          <Text>Administrator</Text>
        </Link>
        <Link href="/">
          <Text>Login / Register</Text>
        </Link>
      </Flex>
    </>
  );
}
