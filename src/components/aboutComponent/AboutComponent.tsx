'use client';
import React from 'react';
import Image from 'next/image';
import CommonButton from '../common/CommonButton';
import { ComponentHeading } from '../common/HeroHeding';
import { useRouter, usePathname } from 'next/navigation';
import {
  AboutAttribute,
  AboutContent,
} from '@/types/dynamicDataTypes/AboutContent';
import { isMedia } from '@/hooks/typegard';

const AboutComponent: React.FC<AboutContent> = ({ Content }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="flex flex-col md:gap-16 gap-8 md:py-[100px] py-12">
      <ComponentHeading
        heading={Content?.AboutUsHeading}
        subheading={Content?.AboutUsSubText}
      />
      {Content.AboutUsAttributes?.map((item: AboutAttribute, index: number) => (
        <div
          key={index}
          className={`flex md:flex-row flex-col xl:gap-20 gap-8 ${(index + 1) % 2 === 0 ? 'md:flex-row-reverse xl:pl-[120px] ' : 'xl:pr-[120px]'}`}
        >
          <div className="flex-1">
            {item?.AboutUsAttributeMainImage &&
            isMedia(item?.AboutUsAttributeMainImage) ? (
              <Image
                src={
                  item?.AboutUsAttributeMainImage.url ??
                  '/Images/AboutUs/about1.png'
                }
                alt="img"
                width={940}
                height={540}
                className="w-full"
              />
            ) : (
              <Image
                src="/Images/AboutUs/about1.png"
                alt="img"
                width={940}
                height={540}
                className="w-full"
              />
            )}
          </div>
          <div className="flex-1 flex flex-col justify-center items-start xl:gap-3 xl:px-0 px-4">
            <div className="grid gap-4 items-start ">
              <div className="items-center gap-3 w-full ">
                {item?.AboutUsAttributeSubImage &&
                isMedia(item?.AboutUsAttributeSubImage) ? (
                  <Image
                    src={
                      item?.AboutUsAttributeSubImage.url ??
                      '/Images/AboutUs/aboutIcon1.svg'
                    }
                    alt="icon"
                    width={68}
                    height={68}
                    className="w-[44px] h-[44px] sm:w-[68px] sm:h-[68px] xl:flex md:hidden sm:flex"
                  />
                ) : (
                  <Image
                    src="/Images/AboutUs/aboutIcon1.svg"
                    alt="icon"
                    width={68}
                    height={68}
                    className="w-[44px] h-[44px] sm:w-[68px] sm:h-[68px] xl:flex md:hidden sm:flex"
                  />
                )}
              </div>
              <div className="grid gap-2 ">
                <h3 className="heading-bold text-gray950">
                  {item?.AboutUsAttributeTitle}
                </h3>
                <p className="title2 text-gray500">
                  {item?.AboutUsAttributeSubTitle}
                </p>
              </div>
            </div>

            <div className="grid ">
              <div className="lg:flex flex-col gap-2 md:mt-5 mt-4 md:hidden">
                {item?.AboutUsAttributeAdvantages?.map(
                  (point: any, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <Image
                        src={'/Images/AboutUs/checkIcon.svg'}
                        alt="check"
                        width={32}
                        height={32}
                        className="w-5 h-5  xl:w-8 xl:h-8 "
                      />
                      <h5 className="heading-medium text-gray-900">
                        {point.AboutUsAttributeAdvantage}
                      </h5>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {pathname !== '/aboutUs' && (
        <div className="flex justify-center mt-6">
          <CommonButton
            typeProp="button"
            classNameProp="!w-fit !py-2 sm:!py-4 hover:!bg-primary800 transition ease-in duration-300"
            clickHandler={() => router.push('/aboutUs')}
          >
            More About Us
          </CommonButton>
        </div>
      )}
    </section>
  );
};

export default AboutComponent;
