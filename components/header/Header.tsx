import { motion } from "framer-motion";
import classes from "./Header.module.css";
import Nav from "./nav/Nav";
import { useState } from "react";
import NavIcon from "./nav/navIcon/NavIcon";
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.header__container}>
      <div className={classes.header}>
        <h1>Ali Saleem Hasan</h1>
        <NavIcon open={open} setOpen={setOpen} />
      </div>
      <Nav open={open} />
    </div>
  );
};

export default Header;
