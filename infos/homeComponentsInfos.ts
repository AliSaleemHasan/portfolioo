import { mainInfos } from "../types/info";

const infos: mainInfos = [
  {
    info: {
      hasButton: true,
      buttonText: "See My Work",
      buttonUrl: {
        external: true,
        url: "/work",
      },
      textInfo: [
        {
          class: "paragraph gray",
          text: "web developer /ui-ux designer",
        },
        {
          class: "subTitle",
          text: "I translate your requirements into powerfull , beautifull and responsive websites",
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
      textInfo: [
        {
          class: "subTitle",
          text: "Are you still wasting time finding good web developers!",
        },
        {
          class: "paragraph",
          text: "A good web developer is someone who is thirsty for new knowladge,seeker for improvments and has willingness to fix errors whethers with team or by himself",
        },
        { class: "subTitle", text: "if yes .. Here comes my turn." },
        {
          class: "paragraph",
          text: "With more than 2 years of expreince in web development,Passionate about making websites ,Interacting with it and decover new web hacks ",
        },
      ],
      hasImage: false,
    },
    right: {
      name: "grid",
      properties: {
        direction: "column-reverse",
        quadContainer: true,
      },
      childName: "card",
    },
  },
];

export default infos;
