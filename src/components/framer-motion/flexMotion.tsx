import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export default function HomePage({ children }: Props) {
  const FlexMotion = chakra(motion.div, {
    shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const variaveis = {
    before: {
      opacity: 0,
    },
    after: {
      opacity: 1,
    },
  };
  return (
    <FlexMotion transition="0.1s linear" variants={variaveis} initial="before" animate="after">
      {children}
    </FlexMotion>
  );
}
