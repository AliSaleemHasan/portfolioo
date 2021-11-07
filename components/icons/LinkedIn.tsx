import { motion } from "framer-motion";

const svgVariants = {
  visible: {
    transition: {
      staggerChildren: 0.01,
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
const LinkedIn: React.FC = () => (
  <motion.svg
    variants={svgVariants}
    initial="hidden"
    animate="visible"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="30"
    height="30"
    viewBox="0 0 256 256"
  >
    <desc>Created with Fabric.js 1.7.22</desc>
    <defs></defs>
    <g transform="translate(128 128) scale(0.72 0.72)">
      <g
        transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="none"
        fillRule="nonzero"
        opacity={1}
      >
        <motion.path
          variants={pathVariants}
          d="M 0 6.447 C 0 2.887 2.978 0 6.651 0 h 76.698 C 87.022 0 90 2.887 90 6.447 v 77.106 C 90 87.114 87.022 90 83.349 90 H 6.651 C 2.978 90 0 87.114 0 83.553 V 6.447 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(255,255,255)"
          fillRule="nonzero"
          opacity={1}
        />
        <motion.path
          variants={pathVariants}
          d="M 20.485 29.151 c 4.74 0 7.691 -3.121 7.691 -7.021 c -0.088 -3.988 -2.95 -7.022 -7.601 -7.022 c -4.65 0 -7.69 3.034 -7.69 7.022 c 0 3.9 2.95 7.021 7.512 7.021 H 20.485 L 20.485 29.151 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(0,102,153)"
          fillRule="nonzero"
          opacity={1}
        />
        <motion.path
          variants={pathVariants}
          d="M 27.282 75.339 v -40.64 H 13.688 v 40.64 H 27.282 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(0,102,153)"
          fillRule="nonzero"
          opacity={1}
        />
        <motion.path
          variants={pathVariants}
          d="M 34.804 75.339 h 13.594 V 52.644 c 0 -1.215 0.088 -2.428 0.447 -3.296 c 0.983 -2.427 3.219 -4.94 6.975 -4.94 c 4.919 0 6.887 3.727 6.887 9.19 v 21.741 h 13.592 V 52.037 c 0 -12.483 -6.706 -18.291 -15.65 -18.291 c -7.333 0 -10.553 4.073 -12.342 6.847 h 0.091 v -5.894 H 34.804 C 34.982 38.513 34.804 75.339 34.804 75.339 L 34.804 75.339 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(0,102,153)"
          fillRule="nonzero"
          opacity={1}
        />
      </g>
    </g>
  </motion.svg>
);

export default LinkedIn;
