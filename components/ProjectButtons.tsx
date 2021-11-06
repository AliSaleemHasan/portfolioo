import Button from "./Button";
import classes from "../styles/ProjectButtons.module.css";
import { projectButtonsStyle } from "../styles/buttonStyles";
const ProjectButtons: React.FC = () => {
  return (
    <div className={classes.projectButtons}>
      <Button
        text="Try The App"
        style={projectButtonsStyle}
        onClick={() => {}}
      />
      <Button
        text="See App Code"
        style={projectButtonsStyle}
        onClick={() => {}}
      />
    </div>
  );
};

export default ProjectButtons;
