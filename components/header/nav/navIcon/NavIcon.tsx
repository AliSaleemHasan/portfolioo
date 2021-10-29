import { motion } from "framer-motion";
import { useState } from "react";
import classes from "./NavIcon.module.css";
const navIconVariants = {
  hover: {
    scale: [1, 1.2, 1],
    rotate: [0, 360, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// animation variant for each line inside nav icon
// the two in the middle will rotate on click
// while upper and lower will fade out

const navIconLinesVariants = {
  openFirst: {
    rotate: 45,
    y: 10,
    width: "50%",
  },
  openSecond: {
    rotate: -45,
    width: "50%",
  },
  close: {
    width: "100%",
    background: "#fff",
  },
};
interface NavIconProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavIcon: React.FC<NavIconProps> = ({ open, setOpen }) => {
  return (
    <motion.div
      onClick={() => setOpen(!open)}
      variants={navIconVariants}
      whileHover="hover"
      className={classes.navIcon}
    >
      <motion.span
        variants={navIconLinesVariants}
        animate={open ? "openFirst" : "close"}
        className={classes.line}
      ></motion.span>
      <motion.span
        variants={navIconLinesVariants}
        animate={open ? "openSecond" : "close"}
        className={classes.line}
      ></motion.span>
    </motion.div>
  );
};

export default NavIcon;
