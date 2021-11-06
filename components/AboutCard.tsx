import classes from "../styles/AboutCard.module.css";
import Image from "next/image";
import Button from "./Button";
import { resumeButtonStyle } from "../styles/buttonStyles";
const AboutCard: React.FC = () => {
  return (
    <div className={classes.aboutCard}>
      <div className={classes.aboutCard__imageContainer}>
        <Image
          src="/images/personal.png"
          alt="personal info"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={classes.aboutCard__intro}>
        <p className="paragraph">
          I am Ali Saleem Hasan from Syria , Currently studying Information
          technology engineering at Damasucs university and work as freelancer
        </p>
        <Button
          onClick={() => {}}
          text="Resume"
          style={resumeButtonStyle}
        ></Button>
      </div>
    </div>
  );
};

export default AboutCard;
