// main section of each page
// main component

import classes from "./Main.module.css";

// main always have to section ,left and right
// each section is component
interface MainProps {
  LeftSection: React.ReactNode;
  RightSection: React.ReactNode;
}
const Main: React.FC<MainProps> = ({ LeftSection, RightSection }) => {
  return (
    <div className={classes.main}>
      <div className={classes.section}>{LeftSection}</div>
      <div className={classes.section}>{RightSection}</div>
    </div>
  );
};

export default Main;
