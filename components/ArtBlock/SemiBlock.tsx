import { FC } from "react";
import QuarterBlock from "./QuarterBlock";

interface SemiBlockProps {
  direction: string;
  firstStyles: {
    color: string;
    radius: string;
  };
  secondStyles: {
    color: string;
    radius: string;
  };
  color: string;
}
const SemiBlock: FC<SemiBlockProps> = ({
  direction,
  firstStyles,
  secondStyles,
  color,
}) => {
  return (
    <div
      style={{
        display: `${direction === "vertical" ? "block" : "flex"}`,
        width: `${direction === "vertical" ? "50%" : "100%"}`,
        height: `${direction === "vertical" ? "100%" : "50%"}`,
        background: color,
      }}
    >
      <QuarterBlock direction={direction} styles={firstStyles} />
      <QuarterBlock direction={direction} styles={secondStyles} />
    </div>
  );
};

export default SemiBlock;
