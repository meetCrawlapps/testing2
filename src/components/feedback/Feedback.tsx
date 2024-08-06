'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import CommonButton from '../common/CommonButton';
import { ComponentHeading } from '../common/HeroHeding';
import { usePathname } from 'next/navigation';
import {
  FeedBackCards,
  FeedBackContent,
} from '@/types/dynamicDataTypes/AboutContent';
import { isMedia } from '@/hooks/typegard';

const Feedback: React.FC<FeedBackContent> = ({ Content }) => {
  const pathname = usePathname();
  const [showAllButton, setShowAllButton] = useState(pathname === '/');
  const [cardsToDisplay, setCardsToDisplay] = useState(
    pathname === '/' ? 3 : Content?.FeedBackCards?.length,
  );

  const handleViewAllClick = () => {
    setCardsToDisplay(Content?.FeedBackCards?.length);
    setShowAllButton(false);
  };
  return (
    <section className="3xl:py-[100px] 3xl:px-[120px] lg:p-20 sm:p-16 px-4 py-12 grid">
      <ComponentHeading
        heading={Content?.FeedBackTitle}
        subheading={Content?.FeedBackSubTitle}
      />

      <div className="grid large:grid-cols-3 sm:grid-cols-2 sm:gap-8 gap-6 mt-16">
        {Content?.FeedBackCards?.slice(0, cardsToDisplay).map(
          (item: FeedBackCards, index: number) => (
            <div
              key={index}
              className="bg-primary25 rounded-[20px] border-r-4 border-b-4 border-[#84CAFF] flex flex-col"
            >
              <div className="w-full">
                {item?.FeedBackCardImage && isMedia(item?.FeedBackCardImage) ? (
                  <Image
                    src={
                      item?.FeedBackCardImage?.url ??
                      '/Images/Feedback/feedbackImg1.png'
                    }
                    alt="Cruize Control"
                    width={538}
                    height={252}
                    className="!w-full"
                  />
                ) : (
                  <Image
                    src={'/Images/Feedback/feedbackImg1.png'}
                    alt="Cruize Control"
                    width={538}
                    height={252}
                    className="!w-full"
                  />
                )}
              </div>
              <div className="py-6 px-7 flex flex-col justify-between flex-1 gap-8">
                <div className="grid gap-2">
                  <h2 className="card-title text-gray-950 line-clamp-2">
                    {item?.FeedBackTitle}
                  </h2>
                  <span className="card-description text-gray500 sm:line-clamp-none line-clamp-2">
                    {item?.FeedBackSubText}
                  </span>
                </div>
                <div className="flex gap-3 items-center mt-auto">
                  <div>
                    {item?.TestimonialImage &&
                    isMedia(item?.TestimonialImage) ? (
                      <Image
                        src={
                          item?.TestimonialImage?.url ??
                          '/Images/Feedback/focusImg1.png'
                        }
                        alt="Cruize Control"
                        width={48}
                        height={48}
                      />
                    ) : (
                      <Image
                        src={'/Images/Feedback/focusImg1.png'}
                        alt="Cruize Control"
                        width={48}
                        height={48}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="heading-semiBold text-gray950 line-clamp-1">
                      {item?.TestimonialName}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div>
                        <Image
                          src={'/Images/Feedback/calender.svg'}
                          alt="date"
                          width={20}
                          height={20}
                        />
                      </div>
                      <span className="titleSame text-gray500 truncate">
                        {item?.Date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
      {showAllButton && (
        <div className="flex justify-center mt-6">
          <CommonButton
            typeProp="button"
            classNameProp="!w-fit !py-2 sm:!py-4 hover:bg-primary800 transition ease-in duration-300"
            clickHandler={handleViewAllClick}
          >
            View All
          </CommonButton>
        </div>
      )}
    </section>
  );
};

export default Feedback;
