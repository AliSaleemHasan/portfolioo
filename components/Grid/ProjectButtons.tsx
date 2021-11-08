import Button from "../utils/Button";
import classes from "styles/ProjectButtons.module.css";
import { projectButtonsStyle } from "styles/buttonStyles";
import { projectButtonsProps } from "types/grid";
const ProjectButtons: React.FC<projectButtonsProps> = ({ properties }) => {
  return (
    <div className={classes.projectButtons}>
      <Button
        external
        url={properties.link1}
        text={`Try ${properties.name} App`}
        style={projectButtonsStyle}
      />
      <Button
        external
        url={properties.link2}
        text={`See ${properties.name} Code`}
        style={projectButtonsStyle}
      />
    </div>
  );
};

export default ProjectButtons;
