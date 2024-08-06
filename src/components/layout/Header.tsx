'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CommonButton from '../common/CommonButton';
import { HeaderContent } from '@/types/dynamicDataTypes/HeaderContent';

const Header:React.FC<HeaderContent> = ({DarkLogo,Phone}) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const router = useRouter();

  // header menu click handler
  const handleMenuClick = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <header
      className={`flex flex-col items-center justify-between mx-auto  extraLarge:px-[120px] px-4 lg:py-3 py-5 sticky top-0 bg-white z-50 transition-all ${isSliderOpen ? 'h-full' : 'h-auto'}`}
    >
      <nav className="flex w-full items-center relative">
        <ul className="font-inter lg:flex gap-8 hidden ">
          <li className="text-base text-gray950  font-medium hover:text-gray500 transition ease-in duration-150">
            <Link href="/">Home</Link>
          </li>
          <li className="text-base text-gray950 font-medium hover:text-gray500 transition ease-in duration-150">
            <Link href="/aboutus">About Us</Link>
          </li>
          <li className="text-base text-gray950 hover:text-gray500 transition ease-in duration-150 font-medium">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        <div className="lg:hidden cursor-pointer" onClick={handleMenuClick}>
          <Image
            src={
              isSliderOpen
                ? '/Images/Header/close.svg'
                : '/Images/Header/menu.svg'
            }
            alt={isSliderOpen ? 'close' : 'menu'}
            width={40}
            height={40}
          />
        </div>

        <div className="absolute max-left-10 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 small:flex hidden py-4">
          <Image
            src={DarkLogo?.url}
            alt="health-care"
            width={80}
            height={80}
          />
        </div>

        <div className="flex items-center justify-end ml-auto gap-[37px]">
          {!isSliderOpen && (
            <div className="lg:flex items-center gap-3 hidden md:py-4 md:px-[25px] py-[10px] px-[15px] rounded-[7px] hover:!bg-primary100 transition ease-in duration-300 cursor-pointer">
              <div>
                <Image
                  src={'/Images/Header/call.svg'}
                  alt="phone"
                  width={20}
                  height={20}
                  className='w-auto h-auto'
                />
              </div>
              <span className="text-base text-primary600 font-medium ">
                {Phone}
              </span>
            </div>
          )}
          <CommonButton
            typeProp="button"
            classNameProp="md:py-4 md:px-[25px] py-[10px] px-[15px] hover:bg-primary800 transition ease-in duration-300"
            clickHandler={() => router.push('/joinUs')}
          >
            Join Us
          </CommonButton>
        </div>
      </nav>

      {isSliderOpen && (
        <div className="bg-white p-4 gap-8 grid w-full transition-all ease-in-out delay-150 duration-300 lg:hidden">
          <ul className="font-manrope flex flex-col gap-4">
            <li className="header-menu font-medium">
              <Link href="/">Home</Link>
            </li>
            <li className="header-menu font-medium">
              <Link href="/aboutus">About Us</Link>
            </li>

            <li className="header-menu font-medium">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="items-center">
            <div className="border border-primary600 rounded-[7px] gap-3 py-4 px-[25px] inline-block hover:bg-primary100 transition ease-in duration-300 cursor-pointer">
              <div className="inline-block pe-2.5">
                <Image
                  src={'/Images/Header/call.svg'}
                  alt="phone"
                  width={20}
                  height={20}
                  className='w-auto h-auto'
                />
              </div>
              <span className="text-base text-primary600 font-medium">
                832-788-0722
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
