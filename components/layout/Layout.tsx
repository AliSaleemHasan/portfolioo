import Footer from "../footer/Footer";
import Header from "../header/Header";
import classes from "./Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
