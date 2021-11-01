// info is every section with text (info)

import classes from "./Info.module.css";
import Image from "next/image";
interface InfoProps {
  hasButton: boolean;
  buttonText?: string;
  hasImage: boolean;
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
const Info: React.FC<InfoProps> = ({
  hasButton,
  buttonText,
  hasImage,
  imageInfo,
  textInfo,
}) => {
  return (
    <div className={classes.info}>
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
    </div>
  );
};

export default Info;
