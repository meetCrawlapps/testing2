import { CommonButtonProps } from '@/types/common/types';
import Image from 'next/image';
const CommonButton = ({
  typeProp,
  children,
  clickHandler,
  disabled = false,
  imgSrc,
  classNameProp,
  spinner,
}: CommonButtonProps) => {
  const buttonClass = disabled ? 'button-disabled' : 'button-enabled';

  return (
    <div>
      <button
        type={typeProp}
        className={`text-base text-white font-medium bg-primary600 py-4 px-[25px] rounded-[7px] flex justify-center w-full ${buttonClass} ${classNameProp}`}
        onClick={clickHandler}
        disabled={disabled}
      >
        {imgSrc && !spinner && <Image src={imgSrc} alt="button icon" />}
        {spinner ? <div className="spinner"></div> : children}
      </button>
    </div>
  );
};

export default CommonButton;
