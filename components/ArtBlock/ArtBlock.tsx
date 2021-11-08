import { FC, useRef } from "react";
import { motion } from "framer-motion";
import SemiBlock from "./SemiBlock";
import blockInfo from "../../infos/BlockInfo";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { artBlockVariants } from "../../animationVariants/artBlockVariants";
const ArtBlock: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});

  return (
    <motion.div
      ref={ref}
      variants={artBlockVariants}
      initial="hidden"
      animate={!!entry?.isIntersecting ? "visible" : "hidden"}
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        minHeight: "50vh",
        flex: 1,
        overflow: "hidden",
      }}
    >
      {blockInfo.map((block, index) => (
        <div
          key={index}
          style={{
            width: block.width,
            height: block.height,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <SemiBlock
            direction={block.direction}
            color={block.first.color}
            firstStyles={block.first.firstStyle}
            secondStyles={block.first.secondStyle}
          />
          <SemiBlock
            direction={block.direction}
            color={block.second.color}
            firstStyles={block.second.firstStyle}
            secondStyles={block.second.secondStyle}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ArtBlock;
