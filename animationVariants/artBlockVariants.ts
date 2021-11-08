export const artBlockVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const quarterBlockVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    scale: [1, 0.4, 1.1, 1],
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};
