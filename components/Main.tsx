// main section of each page
// main component

import classes from "../styles/Main.module.css";

// main always have to section ,left and right
// each section is component
interface MainProps {
  LeftSection: React.ReactNode;
  RightSection: React.ReactNode;
  reverseLayout?: boolean;
}
const Main: React.FC<MainProps> = ({
  LeftSection,
  RightSection,
  reverseLayout,
}) => {
  return (
    <div
      className={`${classes.main} ${reverseLayout && classes.main__reverse}`}
    >
      <div className={classes.section}>{LeftSection}</div>
      <div className={classes.section}>{RightSection}</div>
    </div>
  );
};

export default Main;
