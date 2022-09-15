import { Flex, Input as ChakraInput, InputGroup, Text, InputProps } from "@chakra-ui/react";
import SimpleText from "../text/simpleText";
interface Props extends InputProps, InputProps {
  name: string;
  label: string;
  value: string;
}
export default function InputSelect({ name, value, label, onChange }: Props) {
  const handleOnChange = (e: any) => {
    onChange && onChange(e);
  };
  return (
    <Flex direction={"column"} w={"50%"}>
      <SimpleText text={name} />
      <InputGroup>
        <ChakraInput bg="white" color="black" onChange={handleOnChange} placeholder={label} />
      </InputGroup>
    </Flex>
  );
}
