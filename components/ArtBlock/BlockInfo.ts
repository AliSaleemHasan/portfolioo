const color1 = "#ffffff";
const color2 = "#ef6c62";
const color3 = "#F8B819";
const color4 = "#0B1527";
const color5 = "#0786A1";
const info = [
  {
    direction: "horizontal",
    width: "50%",
    height: "50%",
    first: {
      color: color2,
      firstStyle: {
        radius: "0 50% 50% 0",
        color: color4,
      },
      secondStyle: {
        radius: "50% 0 0 50%",
        color: color1,
      },
    },
    second: {
      color: color5,
      firstStyle: {
        radius: "0 50% 50% 0",
        color: color3,
      },
      secondStyle: {
        radius: "50% 0 0 50%",
        color: color2,
      },
    },
  },
  {
    direction: "vertical",
    width: "50%",
    height: "50%",
    first: {
      color: color3,
      firstStyle: {
        radius: "0% 50% 0% 50%",
        color: "transparent",
      },
      secondStyle: {
        radius: "0 100% 0% 0",
        color: color4,
      },
    },
    second: {
      color: color4,
      firstStyle: {
        radius: "50% 0 50% 0",
        color: "transparent",
      },
      secondStyle: {
        radius: "100% 0% 0 0%",
        color: color1,
      },
    },
  },
  {
    direction: "horizontal",
    width: "50%",
    height: "50%",
    first: {
      color: color4,
      firstStyle: {
        radius: "50% 50% 0% 0%",
        color: "transparent",
      },
      secondStyle: {
        radius: "100% 0 0% 0",
        color: color5,
      },
    },
    second: {
      color: color3,
      firstStyle: {
        radius: "100% 100% 100% 100%",
        color: color4,
      },
      secondStyle: {
        radius: "0 0 0% 100%",
        color: color2,
      },
    },
  },
  {
    direction: "vertical",
    width: "50%",
    height: "50%",
    first: {
      color: color3,
      firstStyle: {
        radius: "0% 0% 100% 0",
        color: color2,
      },
      secondStyle: {
        radius: "0% 50% 50% 0%",
        color: color5,
      },
    },
    second: {
      color: color2,
      firstStyle: {
        radius: "0 0 50% 50%",
        color: color4,
      },
      secondStyle: {
        radius: "50% 50% 0% 0%",
        color: color1,
      },
    },
  },
];

export default info;
