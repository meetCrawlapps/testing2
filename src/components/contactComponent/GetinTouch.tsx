import React from 'react';
import Image from 'next/image';
import { Contactdata } from '@/types/iconlinks/contactdata';

const GetinTouch = () => {
  const data: Array<Contactdata> = [
    {
      id: 1,
      img: '/Images/getintouchicon/mail.png',
      question: 'Schedule a meeting? Email us',
      answer: 'cruizecontrolhealth@gmail.com',
      alt: 'icon mail',
      href: 'mailto:cruizecontrolhealth@gmail.com',
    },
    {
      id: 2,
      img: '/Images/getintouchicon/phone.png',
      question: 'Want to learn more? Give us a call at',
      answer: '832-788-0722',
      alt: 'icon phone',
      href: 'tel:832-788-0722',
    },
    {
      id: 3,
      img: '/Images/getintouchicon/location.png',
      question: 'Visit us',
      answer: 'Address goes here',
      alt: 'icon location',
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="mb-10">
          <h2 className="heading3">Get in touch</h2>
          <span className="heading-medium text-gray-500">
            Our friendly team is always here to chat.
          </span>
        </div>
        {data?.map((data) => (
          <div key={data.id} className="flex mb-8">
            <div className="sm:me-6 xs:me-3 max-w-[72px] sm:min-w-[48px]">
              <Image src={data.img} alt={data.alt} width={48} height={48} />
            </div>
            <div className="flex flex-col text-gray-500 max-w-[374px] w-full">
              <span className="question">{data.question}</span>
              <a href={data?.href} className="iconlinks text-primary600">
                {data.answer}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetinTouch;
