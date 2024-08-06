import Contact from '@/components/contactComponent/Contact';
import { withData } from '@/components/HOC/WrapData';
import OurLocation from '@/components/ourLocation/OurLocation';
import React from 'react';
const GoogleMap = withData(OurLocation,'map');
const page = () => {
  return (
    <>
      {/* join us form */}
      <Contact
        heading="Join The Cruize Control Family"
        subheading="Join the Cruize Control Healthcare. Increase your network, attract more clients, and elevate your business."
        formname="Grow your private practice"
        formhelptext="We will get back to you soon!"
      />

      {/* map */}
      <GoogleMap />
    </>
  );
};

export default page;
