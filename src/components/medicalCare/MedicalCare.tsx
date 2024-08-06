import Image from 'next/image';
import React from 'react';
import { ComponentHeading } from '../common/HeroHeding';
import {
  MedicalCareContent,
  WhyChooseAttribute,
} from '@/types/dynamicDataTypes/MedicalCareContent';
import { isMedia } from '@/hooks/typegard';

const MedicalCare = ({
  heading,
  subheading,
  WhyChooseAttributes,
}: MedicalCareContent) => {
  return (
    <section className="grid bg-primary25 3xl:py-[100px] 3xl:px-[120px] lg:p-20 sm:p-16 px-4 py-12 gap-16">
      <ComponentHeading heading={heading} subheading={subheading} />
      <div className="grid large:grid-cols-3 md:grid-cols-2 md:gap-10 gap-6">
        {WhyChooseAttributes?.map((item: WhyChooseAttribute, index: number) => (
          <div
            key={index}
            className="bg-white p-6 rounded-[20px] grid 3xl:gap-16 gap-8 border-r-4 border-b-4 border-[#D1E9FF]"
          >
            <div>
              {item?.WhyChooseAttributesImage &&
              isMedia(item?.WhyChooseAttributesImage) ? (
                <Image
                  src={
                    item?.WhyChooseAttributesImage.url ??
                    './Images/medicalCare/icon1.svg'
                  }
                  alt="icon"
                  width={92}
                  height={92}
                  className="!w-16 xl:!w-[92px] xl:!h-[92px] "
                />
              ) : (
                <Image
                  src="./Images/medicalCare/icon1.svg"
                  alt="icon"
                  width={92}
                  height={92}
                  className="!w-16 xl:!w-[92px] xl:!h-[92px] "
                />
              )}
            </div>
            <div className="grid lg:gap-4 gap-3">
              <h5 className="heading3 font-manrope">
                {item?.WhyChooseAttributeTitle}
              </h5>
              <h6 className="title-medium text-gray500">
                {item?.WhyChooseAttributeText}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedicalCare;
