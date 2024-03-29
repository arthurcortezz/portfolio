import {
  Flex,
  Input as ChakraInput,
  InputGroup,
  Text,
  InputProps,
  useMediaQuery,
} from "@chakra-ui/react";
import SimpleText from "../text/simpleText";
interface Props extends InputProps, InputProps {
  name: string;
  label: string;
  value: string;
}
export default function Input({ name, value, label, onChange }: Props) {
  const [isLargerThan] = useMediaQuery("(min-width: 960px)");
  const handleOnChange = (e: any) => {
    onChange && onChange(e);
  };
  return (
    <Flex direction={"column"} w={isLargerThan ? "50%" : "100%"} textAlign={"left"}>
      <SimpleText text={name} />
      <InputGroup>
        <ChakraInput
          value={value}
          bg="white"
          color="black"
          onChange={handleOnChange}
          placeholder={label}
        />
      </InputGroup>
    </Flex>
  );
}
