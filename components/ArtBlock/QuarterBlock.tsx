import { FC } from "react";
import { motion } from "framer-motion";
import { QuarterBlockProps } from "../../types/artBlock";
import { quarterBlockVariants } from "../../animationVariants/artBlockVariants";

const QuarterBlock: FC<QuarterBlockProps> = ({ direction, styles }) => {
  return (
    <motion.div
      variants={quarterBlockVariants}
      style={{
        width: `${direction === "vertical" ? "100%" : "50%"}`,
        height: `${direction === "vertical" ? "50%" : "100%"}`,
        backgroundColor: styles.color,
        borderRadius: styles.radius,
      }}
    ></motion.div>
  );
};

export default QuarterBlock;
