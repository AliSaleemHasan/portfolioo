import { motion } from "framer-motion";

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const Logo: React.FC = () => (
  <motion.svg
    variants={svgVariants}
    initial="hidden"
    animate="visible"
    xmlns="http://www.w3.org/2000/svg"
    id="svg8"
    version="1.1"
    viewBox="-20 -20 200 300"
    height="50mm"
    width="40mm"
  >
    <defs id="defs2" />
    <metadata id="metadata5"></metadata>
    <g id="layer1">
      <g transform="translate(2.6726953,1.0690781)" id="g823">
        <motion.path
          variants={pathVariants}
          fill="none"
          stroke="#000030"
          strokeWidth={7.56500006}
          strokeLinecap="round"
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
          paintOrder="stroke markers fill"
          d="m 129.36055,214.2017 -0.18834,3.96047 9.46097,-121.792196 -6.06136,57.988426 -57.758565,-0.7151 -6.384891,63.34854 11.210913,-120.152601"
          id="path815"
        />
        <motion.path
          variants={pathVariants}
          fill="none"
          stroke="#000000"
          strokeWidth={7.8}
          strokeLinecap="butt"
          strokeLinejoin="bevel"
          strokeMiterlimit={4}
          strokeDasharray="none"
          strokeOpacity={1}
          paintOrder="normal"
          d="M 138.63318,96.369974 C 106.20943,146.8511 91.674919,183.21941 68.428364,216.99184"
          id="path819"
        />
      </g>
    </g>
  </motion.svg>
);

export default Logo;
