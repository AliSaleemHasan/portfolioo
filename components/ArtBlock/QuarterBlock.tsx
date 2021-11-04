import { FC } from "react";
import { motion } from "framer-motion";
interface QuarterBlockProps {
  direction: string;
  styles: styles;
}
interface styles {
  color: string;
  radius: string;
  display?: string;
}

let quarterBlockVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  visible: {
    opacity: 1,
    scale: [1, 0.4, 1.1, 1],
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const QuarterBlock: FC<QuarterBlockProps> = ({ direction, styles }) => {
  return (
    <motion.div
      variants={quarterBlockVariants}
      style={{
        width: `${direction === "vertical" ? "100%" : "50%"}`,
        height: `${direction === "vertical" ? "50%" : "100%"}`,
        background: styles.color,
        borderRadius: styles.radius,
      }}
    ></motion.div>
  );
};

export default QuarterBlock;
