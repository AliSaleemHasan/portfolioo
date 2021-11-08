export const navVariants = {
  hidden: {
    x: "100vw",
    transition: {
      duration: 1,
    },
  },
  visible: {
    x: -5,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const contactVariant = {
  close: {
    translateY: 0,
    height: "25%",
    backgroundColor: "initial",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  open: {
    height: "100%",
    translateY: "-75%",
    backgroundColor: "var(--primary)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const navIconVariants = {
  hover: {
    scale: [1, 1.2, 1],
    rotate: [0, 360, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// animation variant for each line inside nav icon
// the two in the middle will rotate on click
// while upper and lower will fade out

export const navIconLinesVariants = {
  openFirst: {
    rotate: 45,
    y: 10,
    width: "50%",
  },
  openSecond: {
    rotate: -45,
    width: "50%",
  },
  close: {
    width: "100%",
    backgroundColor: "#fff",
  },
};

export const textVariants = {
  hidden: {
    y: "200%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
