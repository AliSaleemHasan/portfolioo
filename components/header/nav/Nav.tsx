import { useState } from "react";
import { animate, motion } from "framer-motion";
import classes from "./Nav.module.css";
import ContactForm from "../../contactForm/ContactForm";
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

let contactVariant = {
  close: {
    translateY: 0,
    height: "25%",
    background: "initial",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  open: {
    height: "100%",
    translateY: "-75%",
    background: "var(--primary)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
interface NavProps {
  open: boolean;
}
const Nav: React.FC<NavProps> = ({ open }) => {
  const [contact, setContact] = useState(false);
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      className={classes.nav}
    >
      <ul className={classes.nav__list}>
        <li className={classes.nav__listItem}>Home</li>
        <li className={classes.nav__listItem}>Work</li>
        <li className={classes.nav__listItem}>Resume</li>
        <motion.li
          variants={contactVariant}
          initial="close"
          animate={contact ? "open" : "close"}
          className={`${classes.nav__listItem} ${
            contact && classes.nav__listItemOpen
          } `}
        >
          <div onClick={() => setContact(!contact)}>
            <p>Contact</p>
          </div>
          {contact && (
            <ContactForm background="var(--pink)" color="var(--text-white)" />
          )}
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Nav;
