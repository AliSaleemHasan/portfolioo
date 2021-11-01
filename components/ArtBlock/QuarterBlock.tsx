import { FC } from "react";
import { motion } from "framer-motion";
interface QuarterBlockProps {
  direction: string;
  styles: styles;
}
interface styles {
  color: string;
  radius: string;
}

function hoverOptions(styles: styles): {
  scale: number[];
  opacity: number;
  rotate: number[];
  borderRadius: string[];
} {
  return {
    scale: [1.0, 0.7, 0.5, 0.5, 0.5, 0.7, 1.0],
    opacity: 0.9,
    rotate: [0, 360, 0],
    borderRadius: [styles.radius, "0% 0% 0% 0%", styles.radius],
  };
}
const QuarterBlock: FC<QuarterBlockProps> = ({ direction, styles }) => {
  return (
    <motion.div
      whileHover={hoverOptions(styles)}
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
