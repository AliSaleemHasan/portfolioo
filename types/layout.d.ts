export interface NavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MainProps {
  LeftSection: React.ReactNode;
  RightSection: React.ReactNode;
  reverseLayout?: boolean;
}
