import Contact from '@/components/contactComponent/Contact';
import OurLocation from '@/components/ourLocation/OurLocation';
import { withData } from '@/components/HOC/WrapData';
const GoogleMap = withData(OurLocation,'map');
const page = () => {
  return (
    <>
      {/* contact us form */}
      <Contact
        heading="We’d Love to Here From You"
        subheading="If you have any queries, please feel free to contact us by using the form below."
        formname="Contact us"
        formhelptext="We will get back to you soon!"
      />

      {/* map component */}
      <GoogleMap />
    </>
  );
};

export default page;
