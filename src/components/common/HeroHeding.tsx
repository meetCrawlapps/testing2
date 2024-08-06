'use client';
import { HeaderText } from '@/types/heroheading/headingtype';
import Image from 'next/image';

const HeroHeding = ({ heading, subheading }: HeaderText) => {
  return (
    <div className="text-center max-w-[904px] mx-auto sm:mb-16 xs:mb-8">
      <h2 className="heading2 text-gray-950 mb-5">{heading}</h2>
      <span className="title-regular text-gray-700">{subheading}</span>
    </div>
  );
};

export default HeroHeding;

export const ComponentHeading = ({
  heading,
  subheading,
  classNameprops,
}: HeaderText) => {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center md:gap-5 gap-2 lg:px-0 px-4 ${classNameprops}`}
    >
      <h2 className="heading2 text-gray-950">{heading}</h2>
      <span className="heading-regular max-w-[820px] text-gray500 w-full">
        {subheading}
      </span>
    </div>
  );
};

export const PageHeading = ({ heading, subheading }: HeaderText) => {
  return (
    <div className="w-full relative flex">
      <div className="flex flex-col justify-center items-center text-center max-w-[612px] m-auto sm:py-[106px] xs:py-10 xs:px-4 gap-2 md:gap-5 relative z-20 ">
        <h2 className="heading2 text-primary950 font-manrope">{heading}</h2>
        <span className="heading-medium2 text-gray700 font-inter xs:px-[19px]">
          {subheading}
        </span>
      </div>

      <div
        className={`absolute top-0 left-0 z-10 h-full xxs:hidden small:block`}
      >
        <Image
          src={'/Images/AboutUs/shadow1.svg'}
          alt="cruize control"
          width={0}
          height={0}
          className="!w-full !h-full"
        />
      </div>
      <div
        className={`absolute top-0 left-0 z-10 h-full xxs:block small:hidden`}
      >
        <Image
          src={'/Images/AboutUs/shadow-small.svg'}
          alt="cruize control"
          width={0}
          height={0}
          className="!w-full !h-full"
        />
      </div>
      <div
        className={`absolute top-0 right-0 z-10 h-full xxs:hidden small:block`}
      >
        <Image
          src={'/Images/AboutUs/shadow2.svg'}
          alt="cruize control"
          width={0}
          height={0}
          className="!w-full !h-full"
        />
      </div>
    </div>
  );
};
