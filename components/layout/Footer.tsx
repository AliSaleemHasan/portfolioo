import classes from "../../styles/Footer.module.css";
import Github from "../icons/Github";
import Gmail from "../icons/Gmail";
import LinkedIn from "../icons/LinkedIn";
import { useState } from "react";
import { motion } from "framer-motion";
import { textVariants } from "animationVariants/layoutVariants";
const Footer: React.FC = () => {
  const [text, setText] = useState<string>("");

  return (
    <div className={classes.footer}>
      <div className={classes.footer__icons}>
        <a
          onMouseOver={() => {
            setText("ali1saleem1hasan@gmail.com");
          }}
          onMouseLeave={() => {
            setText("");
          }}
          href="mailto:ali1saleem1hasan@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Gmail />
        </a>
        <a
          onMouseOver={() => {
            setText("github.com/AliSaleemHasan");
          }}
          onMouseLeave={() => {
            setText("");
          }}
          href="https://github.com/AliSaleemHasan"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          onMouseOver={() => {
            setText("linkedin.com/in/ali-saleem-hasan/");
          }}
          onMouseLeave={() => {
            setText("");
          }}
          href="https://www.linkedin.com/in/ali-saleem-hasan/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
      <div className={classes.footer__textContainer}>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={text ? "visible" : "hidden"}
          className="paragraph white"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
