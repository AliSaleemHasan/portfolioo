import { motion } from "framer-motion";
import classes from "styles/NavIcon.module.css";
import { NavProps } from "types/layout";
import {
  navIconVariants,
  navIconLinesVariants,
} from "animationVariants/layoutVariants";
const NavIcon: React.FC<NavProps> = ({ open, setOpen }) => {
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
