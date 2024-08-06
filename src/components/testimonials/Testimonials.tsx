'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { TestimonialContent } from '@/types/dynamicDataTypes/TestimonialContent';
import { isMedia } from '@/hooks/typegard';

const Testimonials = ({ Partners }: TestimonialContent) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // next button handler for slider
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Partners?.length);
  };

  // previous button handler for slider
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Partners.length) % Partners.length,
    );
  };

  const {
    PartnerImage,
    PartnersComapanysImage,
    PartnerInformation,
    PartnerOtherDetail,
    PartnerPosition,
  } = Partners[currentIndex];

  return (
    <section className="flex flex-col justify-center items-center text-center 3xl:py-[100px] 3xl:px-[120px] lg:p-20 sm:p-16 px-4 py-12 medium:gap-16 gap-8">
      <h2 className="heading2">Hear It From Our Partners</h2>
      <div className="flex flex-col-reverse medium:flex-row bg-primary50 rounded-[20px] overflow-hidden border-r-4 border-b-4 border-[#84CAFF] w-full">
        <div className="flex flex-col justify-center items-start lg:pl-[60px] xs:gap-6 medium:gap-12 extraLarge:max-w-[832px] large:max-w-[700px] lg:max-w-[500px] medium:max-w-[400px] xs:!w-full xs:p-6 md:py-6 2xl:py-0 ">
          <div>
            <Image
              src={'/Images/Testimonials/quotes.svg'}
              alt="quotes"
              width={95}
              height={90}
              className="2xl:w-[95px] xl:h-[95px] md:w-[72px] xs:w-[44px] h-[42px] "
            />
          </div>
          <p className="text-testimonial text-gray950 font-manrope text-start">
            {PartnerInformation}
          </p>
          <div className="medium:flex items-center justify-between medium:gap-5 !w-full">
            <div className="flex items-center gap-4">
              <div className="">
                {PartnersComapanysImage && isMedia(PartnersComapanysImage) ? (
                  <Image
                    src={
                      PartnersComapanysImage.url ??
                      '/Images/focus/focusImg1.png'
                    }
                    alt="author"
                    width={72}
                    height={72}
                    className="xl:w-[72px] xl:h-[72px] xs:w-[52px] "
                  />
                ) : (
                  <Image
                    src="/Images/focus/focusImg1.png"
                    alt="author"
                    width={72}
                    height={72}
                    className="xl:w-[72px] xl:h-[72px] xs:w-[52px] "
                  />
                )}
              </div>
              <div className="grid medium:gap-2 gap-1">
                <h2 className="heading-medium text-gray900 font-inter truncate">
                  {PartnerOtherDetail}
                </h2>
                <span className="card-description text-gray500 font-inter truncate flex">
                  {PartnerPosition}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 xl:gap-8 xs:justify-end mt-2 medium:mt-0">
              <button
                onClick={handlePrev}
                className="border border-primary100 p-3 rounded-lg"
              >
                <Image
                  src={'/Images/Testimonials/leftArrow.svg'}
                  alt="back"
                  width={24}
                  height={24}
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
              </button>
              <button
                onClick={handleNext}
                className="border border-primary300 p-3 rounded-lg"
              >
                <Image
                  src={'/Images/Testimonials/rightArrow.svg'}
                  alt="next"
                  width={24}
                  height={24}
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-h-[718px] overflow-hidden relative ">
          {PartnerImage && isMedia(PartnerImage) ? (
            <Image
              src={PartnerImage.url ?? '/Images/Temp/review.png'}
              alt="review"
              width={728}
              height={718}
              className="object-cover h-full w-full"
            />
          ) : (
            <Image
              src="/Images/Temp/review.png"
              alt="review"
              width={728}
              height={718}
              className="object-cover h-full w-full"
            />
          )}
          <h2 className="text-white heading-bold truncate backdrop-blur-md bg-white/30 absolute bottom-0 left-0 w-full p-8 ">
            {PartnerOtherDetail}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
