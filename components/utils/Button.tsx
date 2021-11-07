import { motion } from "framer-motion";
import { ButtonProps } from "../../types/utils";
import Link from "next/link";
import { useEffect } from "react";
let buttonVariants = {
  hover: {
    scale: 1.05,
  },
};

const Button: React.FC<ButtonProps> = ({ text, style, url, external }) => {
  return (
    <motion.div variants={buttonVariants} whileHover="hover">
      {external ? (
        <a href={url} style={style} target="_blank" rel="noreferrer">
          {text}
        </a>
      ) : (
        <Link href={url || "/work"}>
          <a style={style}>{text}</a>
        </Link>
      )}
    </motion.div>
  );
};

export default Button;
