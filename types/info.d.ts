interface semiArtBlockInfo {
  color: string;
  firstStyle: {
    radius: string;
    color: string;
  };
  secondStyle: {
    radius: string;
    color: string;
  };
}
interface artBlockInfo {
  direction: string;
  width: string;
  height: string;
  first: semiArtBlockInfo;
  second: semiArtBlockInfo;
}

export type artBlockInfos = artBlockInfo[];

type textInfos = { class: string; text: string }[];
// interface for info section of main component
interface mainLeftInfo {
  hasButton: boolean;
  buttonText?: string;
  buttonUrl?: {
    external: boolean;
    url: any;
  };
  textInfo: textInfos;
  hasImage: boolean;
  imageInfo?: {
    name: string;
    source: string;
  };
  background?: string;
  isContact?: boolean;
}

// what ever in right section of the main component
interface mainRightInfo {
  name: string;
  properties: any;
  childName: string;
  childProps?: Object;
}

interface mainInfo {
  info: mainLeftInfo;
  right: mainRightInfo;
  reverseLayout?: boolean;
}
export type mainInfos = mainInfo[];
