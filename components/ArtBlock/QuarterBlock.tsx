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

const QuarterBlock: FC<QuarterBlockProps> = ({ direction, styles }) => {
  return (
    <motion.div
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
