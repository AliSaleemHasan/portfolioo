// info is every section with text (info)

import classes from "../styles/Info.module.css";
import Image from "next/image";
import Button from "./Button";
import { useRef } from "react";
import { motion } from "framer-motion";
import { homeButtonStyle } from "../styles/buttonStyles";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
interface InfoProps {
  hasButton: boolean;
  buttonText?: string;
  buttonClass?: string;
  background?: string;
  isContact?: boolean;
  hasImage: boolean;
  imageInfo?: {
    name: string;
    source: string;
  };
  textInfo: {
    class: string;
    text: string;
  }[];
}

let infoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
const Info: React.FC<InfoProps> = ({
  hasButton,
  buttonText,
  hasImage,
  imageInfo,
  background,
  textInfo,
  isContact,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});

  return (
    <div
      ref={ref}
      className={`${classes.info} ${isContact && classes.info__maxHeight}`}
      style={{
        background: background || "initial",
      }}
    >
      <motion.div
        variants={infoVariants}
        animate={!!entry?.isIntersecting ? "visible" : "hidden"}
      >
        {hasImage && imageInfo && (
          <div className={classes.info__imageContainer}>
            <Image
              alt={imageInfo.name}
              src={imageInfo?.source}
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}

        {textInfo.map((text, index) => (
          <p key={index} className={text.class}>
            {text.text}
          </p>
        ))}

        {hasButton && buttonText && (
          <Button
            text={buttonText}
            onClick={() => {
              console.log("test");
            }}
            style={homeButtonStyle}
          />
        )}
      </motion.div>
    </div>
  );
};

export default Info;
