import router from "next/router";
import { Flex, Stack, Text, Box, Link, Container } from "@chakra-ui/react";

export default function FooterPreview() {
  const pushToHistory = (str: string) => {
    router.push(str);
  };

  return (
    <Flex w="100%" background="teal.400" justifyContent="center" bottom={0} position={"fixed"}>
      <Box fontWeight="500" color="white" alignItems="center">
        <Container as={Stack}>
          <Stack direction="row">
            <Link fontSize={"14px"} onClick={() => pushToHistory("/politica")}>
              Política de privacidade
            </Link>
            <Text color="white" fontSize={"14px"} fontWeight={600}>
              /
            </Text>
            <Link fontSize={"14px"} onClick={() => pushToHistory("/ouvidoria")}>
              Ouvidoria
            </Link>
            <Text color="white" fontSize={"14px"} fontWeight={600}>
              /
            </Text>
            <Link fontSize={"14px"} onClick={() => pushToHistory("/tutorial")}>
              Tutoriais
            </Link>
          </Stack>
        </Container>
      </Box>
    </Flex>
  );
}
