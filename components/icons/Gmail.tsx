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
const Gmail: React.FC = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="30"
    height="30"
    viewBox="0 0 256 256"
    variants={svgVariants}
    animate="visible"
    initial="hidden"
    whileHover="hover"
  >
    <desc>Created with Fabric.js 1.7.22</desc>
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
          d="M 84.261 79.141 H 5.628 c -3.049 0 -5.617 -2.487 -5.617 -5.617 V 16.716 c 0 -3.049 2.487 -5.617 5.617 -5.617 h 78.633 c 3.049 0 5.617 2.487 5.617 5.617 v 56.808 C 89.878 76.654 87.391 79.141 84.261 79.141 L 84.261 79.141 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={0}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(227,227,227)"
          fillRule="nonzero"
          opacity={1}
        />
        <motion.polygon
          variants={pathVariants}
          points="11.24,79.14 44.87,52.18 45.1,50.66 11.24,25.7 "
          transform="  matrix(1 0 0 1 0 0) "
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(208,208,208)"
          fillRule="nonzero"
          opacity={1}
        />
        <motion.polygon
          variants={pathVariants}
          points="80.8,79.15 59.85,79.14 11.24,29.82 11.24,25.7 45.1,50.66 80.28,25.34 "
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(187,187,187)"
          fillRule="nonzero"
          opacity={1}
          transform="  matrix(1 0 0 1 0 0) "
        />
        <motion.polygon
          variants={pathVariants}
          points="44.87,52.18 45.1,50.66 11.24,25.7 11.24,29.82 38.4,57.37 "
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(179,179,179)"
          fillRule="nonzero"
          opacity={1}
          transform="  matrix(1 0 0 1 0 0) "
        />
        <motion.path
          variants={pathVariants}
          d="M 5.628 79.141 c -3.129 0 -5.617 -2.487 -5.617 -5.617 V 16.636 c 0 -3.129 2.487 -3.691 5.617 -3.691 s 5.617 0.642 5.617 3.691 v 62.505 H 5.628 L 5.628 79.141 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(213,75,61)"
          fillRule="nonzero"
          opacity={1}
        />
        <motion.path
          variants={pathVariants}
          d="M 5.628 13.747 c 4.012 0 4.814 1.204 4.814 2.889 v 61.703 H 5.628 c -2.648 0 -4.814 -2.166 -4.814 -4.814 V 16.636 C 0.814 14.871 1.617 13.747 5.628 13.747 L 5.628 13.747 z M 5.628 12.945 c -3.129 0 -5.617 0.642 -5.617 3.691 v 56.889 c 0 3.129 2.487 5.617 5.617 5.617 h 5.617 V 16.636 C 11.245 13.507 8.758 12.945 5.628 12.945 L 5.628 12.945 L 5.628 12.945 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(215,43,39)"
          fillRule="nonzero"
          opacity={1}
        />
        <motion.path
          variants={pathVariants}
          d="M 84.261 79.141 h -5.617 V 16.476 c 0 -3.129 2.487 -3.53 5.617 -3.53 c 3.129 0 5.617 0.401 5.617 3.53 v 57.129 C 89.878 76.654 87.391 79.141 84.261 79.141 L 84.261 79.141 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(213,75,61)"
          fillRule="nonzero"
          opacity={1}
        />
        <motion.path
          variants={pathVariants}
          d="M 84.261 13.747 c 3.611 0 4.814 0.722 4.814 2.728 v 57.129 c 0 2.648 -2.166 4.814 -4.814 4.814 h -4.814 V 16.476 C 79.447 14.389 80.651 13.747 84.261 13.747 L 84.261 13.747 z M 84.261 12.945 c -3.129 0 -5.617 0.401 -5.617 3.53 v 62.746 h 5.617 c 3.129 0 5.617 -2.487 5.617 -5.617 V 16.476 C 89.878 13.346 87.391 12.945 84.261 12.945 L 84.261 12.945 L 84.261 12.945 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(215,43,39)"
          fillRule="nonzero"
          opacity={1}
        />
        <motion.path
          variants={pathVariants}
          d="M 44.865 52.101 L 2.419 21.29 c -2.487 -1.845 -3.21 -5.376 -1.364 -7.863 s 5.456 -3.049 8.024 -1.204 L 44.945 38.3 l 36.107 -26.398 c 2.487 -1.845 6.018 -1.284 7.863 1.284 c 1.845 2.487 1.284 6.018 -1.284 7.863 L 44.865 52.101 L 44.865 52.101 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(213,75,61)"
          fillRule="nonzero"
          opacity={1}
        />
        <motion.path
          variants={pathVariants}
          d="M 84.261 11.581 L 84.261 11.581 c 1.525 0 2.969 0.722 3.932 2.006 c 1.525 2.166 1.043 5.135 -1.043 6.74 L 44.865 51.138 L 2.9 20.648 c -2.166 -1.605 -2.728 -4.654 -1.204 -6.74 c 0.883 -1.204 2.407 -2.006 4.012 -2.006 c 1.043 0 2.086 0.321 2.889 0.963 l 35.786 25.997 l 0.481 0.321 l 0.481 -0.321 l 36.027 -26.398 C 82.255 11.902 83.218 11.581 84.261 11.581 L 84.261 11.581 z M 84.261 10.779 c -1.123 0 -2.327 0.321 -3.29 1.043 L 44.865 38.22 L 8.998 12.143 C 8.036 11.421 6.832 11.1 5.628 11.1 c -1.765 0 -3.53 0.802 -4.654 2.327 c -1.765 2.487 -1.043 6.018 1.444 7.863 l 42.446 30.892 l 42.686 -31.132 c 2.487 -1.845 3.049 -5.296 1.284 -7.863 C 87.712 11.581 86.027 10.779 84.261 10.779 L 84.261 10.779 L 84.261 10.779 z"
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill="rgb(215,43,39)"
          fillRule="nonzero"
          opacity={1}
        />
      </g>
    </g>
  </motion.svg>
);

export default Gmail;
