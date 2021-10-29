import { motion } from "framer-motion";
import classes from "./Nav.module.css";
const navVariants = {
  hidden: {
    x: "100vw",
    transition: {
      duration: 1,
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const listItemVariants = {
  hover: {
    boxShadow: "0px 0px 10px #000",
    transition: {
      duration: 2,
    },
  },
};

interface NavProps {
  open: boolean;
}
const Nav: React.FC<NavProps> = ({ open }) => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      className={classes.nav}
    >
      <ul className={classes.nav__list}>
        <motion.li
          variants={listItemVariants}
          whileHover="hover"
          className={classes.nav__listItem}
        >
          Home
        </motion.li>
        <li className={classes.nav__listItem}>About</li>
        <li className={classes.nav__listItem}>Resume</li>
        <li className={classes.nav__listItem}>Contact</li>
      </ul>
    </motion.div>
  );
};

export default Nav;
