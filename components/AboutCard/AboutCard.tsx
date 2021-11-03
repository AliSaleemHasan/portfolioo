import classes from "./AboutCard.module.css";
import Image from "next/image";
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
      </div>
    </div>
  );
};

export default AboutCard;
