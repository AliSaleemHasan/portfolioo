import classes from "./Header.module.css";
import Nav from "./nav/Nav";
import { useState } from "react";
import NavIcon from "./nav/navIcon/NavIcon";
import Logo from "../Logo/Logo";
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.header__container}>
      <div className={classes.header}>
        <Logo />
        <NavIcon open={open} setOpen={setOpen} />
      </div>
      <Nav open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
