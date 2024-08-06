import { PointDataType } from '@/types/focus/FocusDataType';
import Image from 'next/image';
import React from 'react';
import { ComponentHeading } from '../common/HeroHeding';
import {
  Advantage,
  FocusContent,
  trustedCompanie,
} from '@/types/dynamicDataTypes/FocusContent';
import { isMedia } from '@/hooks/typegard';


const Focus = ({
  focusImage,
  focusHeading,
  focusSubHeading,
  focusAdvantages,
  trustedCompanies,
}: FocusContent) => {
  const points: PointDataType[] = (focusAdvantages ?? []).map(
    (advantage: Advantage) => ({
      img: '/Images/focus/tick.svg',
      point: advantage.Advantage ?? null,
    }),
  );

  return (
    <section className="">
      <div className="grid 3xl:grid-cols-2 3xl:gap-20 bg-primary25 relative">
        <div className="xs:px-3 lg:px-[120px] 3xl:px-0 3xl:pl-[120px] 3xl:pb-0 pb-8 flex flex-col pt-[120px] xxs:order-2 3xl:order-1 xs:pt-[180px] small:pt-[135px] sm:pt-[200px] lg:pt-[135px]">
          <ComponentHeading
            heading={focusHeading}
            subheading={focusSubHeading}
            classNameprops="!text-start !items-start xs:pt-8 small:pt-0"
          />
          <div className="flex flex-col lg:mt-8 2xl:mt-16 mt-4 gap-4 ">
            {points?.map((item: PointDataType, index: number) => (
              <div key={index} className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-5">
                  <Image
                    src={item.img}
                    alt="check"
                    width={24}
                    height={24}
                    className="w-5 h-5 xl:w-6 xl:h-6"
                  />
                  <h5 className="heading-medium text-gray-900">{item.point}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xxs:order-1 3xl:order-2 relative flex flex-col items-center">
          <div className="w-full">
            {focusImage && isMedia(focusImage) ? (
              <Image
                src={focusImage.url ?? '/Images/focus/focusImgRight'}
                alt="focus image"
                width={920}
                height={838}
                className="3xl:m-0 xs:mx-auto w-full focusImage"
              />
            ) : (
              <Image
                src="/Images/focus/focusImgRight" // Fallback image if focusImage is a string
                alt="focus image"
                width={920}
                height={838}
                className="3xl:m-0 xs:mx-auto w-full"
              />
            )}
          </div>

          <div className="focus flex justify-evenly xs:gap-[5px] bg-white rounded-[20px] border-r-4 border-b-4 border-[#84CAFF] absolute 3xl:top-[582px] 3xl:right-[632px] max-w-[1167px] 3xl:w-[1167px] large:w-[1167px]">
            {trustedCompanies?.map(
              (company: trustedCompanie, index: number) => {
                return (
                  <div key={index} className="flex">
                    
                    {company.TrustedCompanesImage && isMedia(company.TrustedCompanesImage) ? (
                      <Image
                        src={company.TrustedCompanesImage.url ?? '/Images/focus/png'}
                        alt={company.TrustedCompanesImage.alt}
                        width={company.TrustedCompanesImage.width ?? 65}
                        height={company.TrustedCompanesImage.height ?? 52}
                        className="w-[65px] h-[52px] sm:w-[103px] sm:h-[82px]"
                      />
                    ) : (
                      <Image
                        src="/Images/focus/focusImg1.png" // Fallback image if focusImage is a string
                        alt="focus image"
                        width={65}
                        height={52}
                        className="w-[65px] h-[52px] sm:w-[103px] sm:h-[82px]"
                      />
                    )}
                  </div>
                );
              },
            )}
            <div className="flex items-center">
              <span className="text-gray500">+ Trusted by many more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
