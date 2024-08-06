'use client';
import Image from 'next/image';
import React from 'react';
import CommonButton from '../common/CommonButton';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { GetConnectedContent } from '@/types/dynamicDataTypes/GetConnectedContent';

const GetConnected = ({
  Question,
  QuestionSubText,
  email,
  phone,
}: GetConnectedContent) => {
  const router = useRouter();
  return (
    <section className="bg-primaryMain grid 4xl:grid-cols-4 lg:grid-cols-5 xl:gap-[60px] sm:gap-10 xs:gap-8 3xl:py-[100px] 3xl:px-[120px] lg:p-20 sm:p-16 px-4 py-12">
      <div className="4xl:col-span-3 lg:col-span-3 grid sm:gap-5 xs:gap-2">
        <h2 className="title-large text-white font-manrope">{Question}</h2>
        <p className="title-medium text-white60">{QuestionSubText}</p>
      </div>
      <div className="lg:col-span-2 4xl:col-span-1 grid gap-[60px]">
        <div className="grid gap-5">
          <div className="flex items-center sm:gap-5 gap-3">
            <div>
              <Image
                src={'/Images/getintouchicon/emailMain.svg'}
                alt="email"
                width={52}
                height={52}
                className="w-10 h-10 sm:w-[52px] sm:h-[52px]"
              />
            </div>
            <div className="grid gap-1">
              <h3 className="text text-white80">Email ID</h3>
              <Link
                href={`mailto:${email}`}
                className="heading-extraBold text-white hover:text-gray300"
              >
                {email}
              </Link>
            </div>
          </div>
          <div className="flex items-center sm:gap-5 gap-3">
            <div>
              <Image
                src={'/Images/getintouchicon/phoneMain.svg'}
                alt="phone"
                width={52}
                height={52}
                className="w-10 h-10 sm:w-[52px] sm:h-[52px]"
              />
            </div>
            <div className="grid gap-1">
              <h3 className="title-medium text-white80">Phone Number</h3>
              <span className="heading-extraBold text-white">{phone}</span>
            </div>
          </div>
        </div>
        <div className="xs:flex  items-center gap-3">
          <CommonButton
            typeProp="button"
            classNameProp="!bg-white !text-primary950 !w-fit !py-2 sm:!py-4  hover:!bg-primary200 transition ease-in duration-300"
          >
            Get Started Today!
          </CommonButton>
          <CommonButton
            typeProp="button"
            classNameProp="!bg-transparent !border !border-white !w-fit !py-2 sm:!py-4 hover:!bg-primary900 transition ease-in duration-30"
            clickHandler={() => router.push('/contact')}
          >
            Contact Us
          </CommonButton>
        </div>
      </div>
    </section>
  );
};

export default GetConnected;
