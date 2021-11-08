import { useState } from "react";
import { motion } from "framer-motion";
import classes from "../../../../styles/Nav.module.css";
import ContactForm from "../../../utils/ContactForm";
import { useRouter } from "next/router";
import { NavProps } from "../../../../types/layout";
import {
  navVariants,
  contactVariant,
} from "../../../../animationVariants/layoutVariants";

const Nav: React.FC<NavProps> = ({ open, setOpen }) => {
  const router = useRouter();
  const [contact, setContact] = useState(false);
  let navigation = (destination: string): void => {
    setOpen(!open);
    router.push(destination);
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      className={classes.nav}
    >
      <ul className={classes.nav__list}>
        <li className={classes.nav__listItem} onClick={() => navigation("/")}>
          Home
        </li>
        <li
          className={classes.nav__listItem}
          onClick={() => navigation("work")}
        >
          Work
        </li>
        <li className={classes.nav__listItem}>
          <a href="Ali-Hasan_Resume.pdf" download>
            Resume
          </a>
        </li>
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
          {contact && <ContactForm />}
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Nav;
