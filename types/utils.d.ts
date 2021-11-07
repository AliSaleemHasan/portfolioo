export interface ButtonProps {
  text: string;
  style: Object;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface InfoProps {
  hasButton: boolean;
  buttonText?: string;
  buttonClass?: string;
  background?: string;
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
