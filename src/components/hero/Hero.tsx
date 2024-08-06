// 'use client'
import React from 'react';
import CommonButton from '../common/CommonButton';
import Link from 'next/link';
import joinUsArrow from '../../../public/Images/Hero/joinUsArrow.svg';
import Image from 'next/image';
import img1 from '../../../public/Images/Hero/bgmain.svg';
import { HeadContentType } from '@/types/dynamicDataTypes/HeroContent';

const Hero = ({title1,title2,desc}: HeadContentType) => {
  
  return (
    <>
      <section className="height-handeling xs:pt-[143px] md:pt-0 flex justify-center md:justify-start relative">
        <div className="absolute left-0 top-0 opacity-50 z-0 h-full flex lg:items-center xxs:items-start w-full">
          <Image
            src={img1}
            alt="img"
            width={0}
            height={0}
            className=" w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center m-auto text-center max-w-[680px] relative z-20 xs:p-3">
          <div>
            <h1 className="heading1 font-extrabold text-primary950 font-manrope">
              {title1}
            </h1>
            <h2 className="heading1 font-light text-primary950">{title2}</h2>
          </div>
          <div className="mt-10">
            <div className="max-w-[826px]">
              <p className="heading-regular-hero font-inter text-gray500">
              {desc}
              </p>
            </div>
          </div>
          <div className="flex justify-center xs:mt-8 sm:mt-[40px] gap-3 relative z-10 xxs:flex-col xs:flex-row xxs:items-center xs:items-start xxs:mt-8">
            <CommonButton
              typeProp="button"
              classNameProp="!w-fit !py-2 sm:!py-4 hover:bg-primary800 transition ease-in duration-300"
            >
              Get Started Today!
            </CommonButton>
            <Link
              href="/joinUs"
              className="title1 text-primary600 flex items-center gap-[10px] py-4 px-[15px] !w-fit sm:!py-4 lg:flex  md:py-4 md:px-[25px] rounded-[7px] hover:bg-primary100 transition ease-in duration-300 cursor-pointer"
            >
              Join Us{' '}
              <Image src={joinUsArrow} alt="Join us" width={24} height={24} />
            </Link>
          </div>
        </div>

        <div className="blurdiv flex flex-col items-center backdrop-blur !w-full h-[375px] absolute bottom-0 z-0">
          <Image
            src="/Images/Hero/blurbg.svg"
            alt="blur-background"
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
