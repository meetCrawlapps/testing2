import { Formtype } from '@/types/form/formTypes';
import HeroHeding from '../common/HeroHeding';
import Form from './Form';
import GetinTouch from './GetinTouch';
import Image from 'next/image';
const Contact = ({ heading, subheading, formname, formhelptext }: Formtype) => {
  return (
    <>
      <div className="relative top-0 md:py-[100px] xs:py-12">
        <Image
          src={'/Images/contact/EllipseLeft.png'}
          alt="background"
          width={0}
          height={0}
          className="absolute top-0 -z-10 w-full h-full"
        />
        <Image
          src={'/Images/contact/EllipseRight.png'}
          alt="background"
          width={0}
          height={0}
          className="absolute  top-0 right-0 -z-10 w-full h-full"
        />
        <HeroHeding heading={heading} subheading={subheading} />
        <div className="xs:px-4">
          <div className="flex lg:flex-row xs:flex-col justify-center sm:mx-auto xs:px-4 sm:p-12 xs:p-5 rounded-[32px] max-w-[1256px] border-r-4 border-b-4 border-[#84CAFF] bg-white">
            <Form formname={formname} formhelptext={formhelptext} />
            <div className="lg:border-l xs:border-b border-gray-200 lg:mx-[60px] xs:my-[32px]"></div>
            <GetinTouch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
