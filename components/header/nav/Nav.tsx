import { useState } from "react";
import { animate, motion } from "framer-motion";
import classes from "../../../styles/Nav.module.css";
import ContactForm from "../../ContactForm";
import { useRouter } from "next/router";
const navVariants = {
  hidden: {
    x: "100vw",
    transition: {
      duration: 1,
    },
  },
  visible: {
    x: -5,
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
    backgroundColor: "initial",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  open: {
    height: "100%",
    translateY: "-75%",
    backgroundColor: "var(--primary)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
interface NavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
