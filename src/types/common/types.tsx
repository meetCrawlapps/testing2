export interface CommonButtonProps {
  typeProp: 'button' | 'reset' | 'submit';
  children: React.ReactNode;
  clickHandler?: () => void;
  disabled?: boolean;
  imgSrc?: string;
  classNameProp?: string;
  spinner?: boolean;
}
