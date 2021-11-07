import { mainInfos } from "../types/info";

const infos: mainInfos = [
  {
    info: {
      hasButton: false,
      buttonText: "",
      textInfo: [
        {
          class: "title",
          text: "Dreams Don’t work unless you do.",
        },
        {
          class: "paragraph gray",
          text: "Bellow you can find  A selection of projects I've worked on, during my career as a software developer.",
        },
      ],
      hasImage: false,
    },
    right: {
      name: "art",
      properties: {},
      childName: "",
    },
  },
  {
    info: {
      hasButton: false,
      buttonText: "",
      textInfo: [
        {
          class: "subTitle gray",
          text: "Lettalk is full stack real time chat application . I made this app in order to learn more about how server work and how sockets work. It provides real time communication between two user and much more...",
        },
      ],
      hasImage: true,
      imageInfo: { name: "lettalk", source: "/images/lettalklogo.png" },
    },
    right: {
      name: "grid",
      properties: {
        direction: "row",
        quadContainer: false,
      },
      childName: "project",
    },
  },
  {
    info: {
      background: "var(--pink)",
      isContact: true,
      hasButton: false,
      buttonText: "",
      textInfo: [
        {
          class: "subTitle white",
          text: "Drop me a line",
        },
        {
          class: "paragraph white",
          text: "  i would love to hear from you. would you like to discuss a potential project? mybe you just want to stop and say hi?",
        },
        {
          class: "paragraph white",
          text: "  mybe you just want to stop and say hi? you can send me a message using my contact form or by information",
        },
        {
          class: "paragraph white",
          text: "  you can send me a message using my contact form ",
        },
      ],
      hasImage: false,
      imageInfo: { name: "lettalk", source: "/images/lettalklogo.png" },
    },
    right: {
      name: "contact",
      properties: {},
      childName: "",
    },
  },
];

export default infos;
