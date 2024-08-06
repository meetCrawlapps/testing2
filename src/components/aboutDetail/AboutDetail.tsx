import { isMedia } from '@/hooks/typegard';
import { AboutpageContent } from '@/types/dynamicDataTypes/AboutContent';
import Image from 'next/image';
import React from 'react';

const AboutDetail: React.FC<AboutpageContent> = ({
  OwnerName,
  OwnerSubText,
  OwnerDetails,
  OwnerImage,
}) => {
  return (
    <>
      <section className="3xl:py-[100px] 3xl:px-[120px] lg:p-20 sm:p-16 px-4 py-12">
        <div className="flex lg:flex-row xs:flex-col items-start gap-[60px] relative justify-start">
          <div className="grid 3xl:gap-[60px] 2xl:gap-10 md:gap-5 xs:gap-10 3xl:max-w-[930px] 2xl:max-w-[700px] xl:max-w-[570px] lg:max-w-[400px] xs:order-2 order-1 text-left">
            <div className="grid gap-2">
              <h2 className="about-heading lg:text-primary950 xs:gray950">
                {OwnerName}
              </h2>
              <span className="title-regular text-gray700">{OwnerSubText}</span>
            </div>
            <div className="grid 3xl:gap-[60px] 2xl:gap-10 md:gap-5 xs:gap-8 text-bold text-gray950 font-inter">
              <h5>{OwnerDetails}</h5>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 ">
            <div className="xl:pl-0 4xl:pl-20 2xl:pl-20 3xl:pl-0 relative">
              {OwnerImage && isMedia(OwnerImage) ? (
                <Image
                  src={OwnerImage.url ?? '/Images/aboutRightImg.png'}
                  alt="cruize control"
                  width={446}
                  height={595}
                  className="small:w-[288px] md:w-[400px] lg:w-[370px] extraLarge:w-[446px] w-[250px]"
                />
              ) : (
                <Image
                  src="/Images/aboutRightImg.png"
                  alt="cruize control"
                  width={446}
                  height={595}
                  className="small:w-[288px] md:w-[400px] lg:w-[370px] extraLarge:w-[446px] w-[250px]"
                />
              )}
              <div className="absolute 3xl:right-[-164px] 3xl:bottom-[-58px]  2xl:right-[-144px] 2xl:bottom-[-55px] lg:bottom-[-50px] lg:right-[-96px] md:right-[-138px] md:bottom-[-48px] xs:right-[-61px] xs:bottom-[-24px]">
                <Image
                  src={'/Images/AboutUs/aboutLogo.png'}
                  alt="cruize control"
                  width={268}
                  height={268}
                  className="img-fluid xs:w-[120px] xs:h-[120px] small:w-[140px] small:h-[140px] sm:w-[170px] sm:h-[170px] md:w-[186px] md:h-[186px] lg:w-[182px] lg:h-[182px] 2lg:w-[210px] 2lg:h-[210px] 2xl:w-[234px] 2xl:h-[234px] 3xl:w-[268px] 3xl:h-[268px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDetail;
