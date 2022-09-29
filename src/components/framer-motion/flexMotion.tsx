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
    antes: {
      opacity: 0,
    },
    durante: {
      opacity: 1,
    },
  };
  return (
    <FlexMotion transition="0.1s linear" variants={variaveis} initial="antes" animate="durante">
      {children}
    </FlexMotion>
  );
}
