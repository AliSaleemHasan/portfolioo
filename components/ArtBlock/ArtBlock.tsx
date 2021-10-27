import { FC } from "react";
import { motion } from "framer-motion";
import SemiBlock from "./SemiBlock";
import blockInfo from "./BlockInfo";

const ArtBlock: FC = () => {
  console.log(blockInfo);
  return (
    <div
      style={{
        background: "red",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        flex: 1,
        overflow: "hidden",
      }}
    >
      {blockInfo.map((block, index) => (
        <motion.div
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
        </motion.div>
      ))}
    </div>
  );
};

export default ArtBlock;
