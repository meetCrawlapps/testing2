'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import CommonButton from '../common/CommonButton';
import {
  ApprochContent,
  ExpertiseItem,
} from '@/types/dynamicDataTypes/ApprochContent';
import { isMedia } from '@/hooks/typegard';

const ApproachAndExpertise = ({
  heading,
  subheading,
  mainImage,
  topDesc,
  expertise,
}: ApprochContent) => {
  const router = useRouter();

  return (
    <section className="bg-primary950 grid gap-16 lg:py-[120px] py-12">
      <div className="grid justify-center items-center text-center gap-5 xl:px-0 px-4">
        <h2 className="heading2 text-white font-manrope">{heading}</h2>
        <p className="heading-regular text-white font-inter max-w-[836px] ">
          {subheading}
        </p>
      </div>

      <div className="grid lg:grid-cols-2  lg:gap-[60px] gap-10">
        <div>
          {mainImage && isMedia(mainImage) ? (
            <Image
              src={mainImage.url ?? './Images/approch/approchImg.png'}
              alt="experience"
              width={mainImage.width ?? '0'}
              height={mainImage.height ?? '0'}
            />
          ) : (
            <Image
              src="./Images/approch/approchImg.png"
              alt="experience"
              width={100}
              height={100}
              className="w-full"
            />
          )}
        </div>
        <div className="grid 3xl:gap-10 lg:gap-5 gap-8 pr-0 md:pr-5 p-4 3xl:p-0">
          <p className="heading-medium text-white lg:hidden xl:flex">
            {topDesc}
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {expertise?.map((expertise: ExpertiseItem, index: number) => (
              <div
                key={index}
                className="2xl:grid 3xl:gap-5 lg:gap-2 lg:flex sm:grid md:gap-4 flex gap-4"
              >
                <div className="hidden xs:flex lg:hidden  2xl:flex  items-start">
                  {expertise?.ExpertiseImage &&
                  isMedia(expertise?.ExpertiseImage) ? (
                    <Image
                      src={
                        expertise?.ExpertiseImage.url ??
                        './Images/approch/img1.svg'
                      }
                      alt="item"
                      width={expertise?.ExpertiseImage.width ?? '68'}
                      height={expertise?.ExpertiseImage.height ?? '68'}
                      className="w-[44px] h-[44px] lg:w-[60px] lg:h-[60px] 2xl:[68px] 2xl:[68px]"
                    />
                  ) : (
                    <Image
                      src="./Images/approch/img1.svg"
                      alt="item"
                      width={68}
                      height={68}
                      className="w-[44px] h-[44px] lg:w-[60px] lg:h-[60px] 2xl:[68px] 2xl:[68px]"
                    />
                  )}
                </div>
                <div className="grid gap-2">
                  <h3 className="heading-bold text-white font-manrope">
                    {expertise?.Expertise}
                  </h3>
                  <h5 className="title2 text-gray300">
                    {expertise?.ExpertiseSubText}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <CommonButton
              typeProp="button"
              classNameProp="!bg-white !title1 !text-primary950 !px-10 !w-fit !py-2 xl:!py-4  hover:!bg-primary200 transition ease-in duration-300"
              clickHandler={() => router.push('/joinUs')}
            >
              Join Us
            </CommonButton>
            <CommonButton
              typeProp="button"
              classNameProp="!bg-transparent !title1 !text-white !border !border !border-white !w-fit !py-2 xl:!py-4 hover:!bg-primary900 transition ease-in duration-300"
              clickHandler={() => router.push('/contact')}
            >
              Contact Us
            </CommonButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachAndExpertise;
