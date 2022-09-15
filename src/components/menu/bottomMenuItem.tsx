import { Box, Text } from "@chakra-ui/react";
import { LinkProps } from "../types";

interface Props {
  onClickMenu?: (link: LinkProps) => void;
  value?: LinkProps | null;
  item: LinkProps;
}
export default function BottomMenuItem({ item, value, onClickMenu }: Props) {
  const clickCheck = () => {
    if (value) {
      if (item.id === value.id) return true;
      else if (item.subItems) {
        const find = item.subItems.find(item => item.id === value.id);
        if (find) return true;
      } else return false;
    }
  };
  const clicked = clickCheck();
  return (
    <Box
      bg={clicked ? "#4d4d4d" : ""}
      as={"button"}
      onClick={() => onClickMenu && onClickMenu(item)}
      w="100%"
      _hover={{ bg: "#4d4d4d" }}>
      <Text color={"white"}>{item.name}</Text>
    </Box>
  );
}
