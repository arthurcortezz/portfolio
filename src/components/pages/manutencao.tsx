import { Flex, Box, Text } from "@chakra-ui/react";

export default function Manutencao() {
  return (
    <Flex w="100%" h="100vh" bg="teal.300" justifyContent={"center"} alignItems={"center"}>
      <Flex
        w={{ base: "90%", md: "60%" }}
        color="black"
        bg="white"
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        borderRadius={20}
        shadow={"lg"}
        direction={"column"}
        px={2}
        pb={4}>
        <Flex w="100%" px={{ base: 4, md: 10 }}>
          <Box py={4} border={"gray solid 1px"} w="100%" alignItems={"center"} justifyContent={"center"} px={{ base: 3, md: 10 }}>
            <Flex>
              <Text fontSize={24} fontWeight={700}>
                Estamos em manutenção. O sistema voltará logo!.
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
}
