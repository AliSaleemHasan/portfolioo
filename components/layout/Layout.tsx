import Footer from "./Footer";
import Header from "./header/Header";
import classes from "../../styles/Layout.module.css";

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
