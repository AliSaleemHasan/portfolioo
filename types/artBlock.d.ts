//art block types

export interface QuarterBlockProps {
  direction: string;
  styles: styles;
}
interface styles {
  color: string;
  radius: string;
  display?: string;
}

export interface SemiBlockProps {
  direction: string;
  firstStyles: {
    color: string;
    radius: string;
  };
  secondStyles: {
    color: string;
    radius: string;
  };
  color: string;
}
