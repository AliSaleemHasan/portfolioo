import { motion } from "framer-motion";
import { ButtonProps } from "../../types/utils";
let buttonVariants = {
  hover: {
    scale: 1.05,
  },
};

const Button: React.FC<ButtonProps> = ({ onClick, text, style }) => {
  return (
    <motion.div variants={buttonVariants} whileHover="hover">
      <button style={style} onClick={onClick}>
        {text}
      </button>
    </motion.div>
  );
};

export default Button;
