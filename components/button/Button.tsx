import { motion } from "framer-motion";
let buttonVariants = {
  hover: {
    scale: 1.05,
  },
};

interface ButtonProps {
  text: string;
  style: Object;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
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
