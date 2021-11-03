// info is every section with text (info)

import classes from "./Info.module.css";
import Image from "next/image";
import Button from "../button/Button";
import { useRef } from "react";
import { motion } from "framer-motion";
import { homeButtonStyle } from "../button/buttonStyles";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
interface InfoProps {
  hasButton: boolean;
  buttonText?: string;
  buttonClass?: string;
  hasImage: boolean;
  index: number;
  imageInfo?: {
    name: string;
    source: string;
    width: number;
    height: number;
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
  index,
  textInfo,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});

  return (
    <div ref={ref} className={classes.info}>
      <motion.div
        variants={infoVariants}
        animate={!!entry?.isIntersecting ? "visible" : "hidden"}
      >
        {hasImage && imageInfo && (
          <Image
            alt={imageInfo.name}
            src={imageInfo?.source}
            width={imageInfo.width}
            height={imageInfo.height}
          />
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
