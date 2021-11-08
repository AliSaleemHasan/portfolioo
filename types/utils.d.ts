export interface ButtonProps {
  text: string;
  style: Object;
  url?: any;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface InfoProps {
  hasButton: boolean;
  buttonText?: string;
  buttonClass?: string;
  background?: string;
  buttonUrl?: {
    external: boolean;
    url: any;
  };
  isContact?: boolean;
  hasImage: boolean;
  imageInfo?: {
    name: string;
    source: string;
  };
  textInfo: {
    class: string;
    text: string;
  }[];
}
