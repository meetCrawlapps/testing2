'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import CommonButton from '../common/CommonButton';
import { ComponentHeading } from '../common/HeroHeding';
import { usePathname } from 'next/navigation';
import {
  NetworkCard,
  NetworkContent,
} from '@/types/dynamicDataTypes/AboutContent';
import { isMedia } from '@/hooks/typegard';

const FinestNetwork: React.FC<NetworkContent> = ({ Content }) => {
  const pathname = usePathname();
  const [showAllButton, setShowAllButton] = useState(pathname === '/');
  const [cardsToDisplay, setCardsToDisplay] = useState(
    pathname === '/' ? 8 : Content?.NetworkFigure?.length,
  );

  const handleViewAllClick = () => {
    setCardsToDisplay(Content?.NetworkFigure?.length);
    setShowAllButton(false);
  };

  return (
    <section className="grid 3xl:py-[100px] 3xl:px-[120px] lg:p-20 sm:p-16 px-4 py-12 gap-16">
      <ComponentHeading
        heading={Content?.NetworkHeading}
        subheading={Content?.NetworkSubText}
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {Content?.NetworkFigure?.slice(0, cardsToDisplay)?.map(
          (item: NetworkCard, index: number) => (
            <div
              key={index}
              className={`bg-primary25 2xl:px-6 px-3 2xl:pt-6 pt-3 border-r-4 border-b-4 border-[#84CAFF] rounded-[20px]`}
            >
              <div>
                {item?.NetworkImage && isMedia(item?.NetworkImage) ? (
                  <Image
                    src={item?.NetworkImage.url ?? '/Images/Network/Spine.png'}
                    alt={item?.NetworkImageTitle}
                    width={354}
                    height={256}
                    className="!w-full"
                  />
                ) : (
                  <Image
                    src={'/Images/Network/Spine.png'}
                    alt="Spine Image"
                    width={354}
                    height={256}
                    className="!w-full"
                  />
                )}
              </div>
              <h3 className="flex justify-center text-center mt-5 mb-6">
                {item?.NetworkImageTitle}
              </h3>
            </div>
          ),
        )}
      </div>
      {showAllButton && (
        <div className="flex justify-center mt-6">
          <CommonButton
            typeProp="button"
            classNameProp="!w-fit hover:bg-primary800 transition ease-in duration-300"
            clickHandler={handleViewAllClick}
          >
            View All
          </CommonButton>
        </div>
      )}
    </section>
  );
};

export default FinestNetwork;
