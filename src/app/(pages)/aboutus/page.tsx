import AboutComponent from '@/components/aboutComponent/AboutComponent';
import AboutDetail from '@/components/aboutDetail/AboutDetail';
import { PageHeading } from '@/components/common/HeroHeding';
import Feedback from '@/components/feedback/Feedback';
import FinestNetwork from '@/components/finestNetwork/FinestNetwork';
import GetConnected from '@/components/getConnected/GetConnected';
import { withData } from '@/components/HOC/WrapData';
import OurLocation from '@/components/ourLocation/OurLocation';
import { fetchPayloadData } from '@/hooks/useDataProvider';
import { Aboutpage, Question } from '@/payload-types';
import React from 'react';

const GoogleMap = withData(OurLocation,'map'); //calling this withData function you can pass the component and second u have to pass the collection name for pass the data .
const FeedBackComponent = withData(Feedback,'feedback');
const NetworkComponent = withData(FinestNetwork,'network');
const AboutUsComponent = withData(AboutComponent,'about');

const AboutUs = async() => {
  const Questiondata:Question = await fetchPayloadData('questions')
  const AboutPageData:Aboutpage = await fetchPayloadData('aboutpage')
  return (
    <main>
      {/* page banner heading */}
      <PageHeading
        heading={AboutPageData?.AboutHeader}
        subheading={AboutPageData?.AboutSubheader}
      />
      {/* about detail component */}
      <AboutDetail 
        OwnerName={AboutPageData?.OwnerName}
        OwnerSubText={AboutPageData?.OwnerSubText}
        OwnerDetails={AboutPageData?.OwnerDetails}
        OwnerImage={AboutPageData?.OwnerImage}
      />

      {/* about component  */}
      <AboutUsComponent/>


      {/*  Finest Healthcare Network component */}
      <NetworkComponent/>

      {/* get connected component */}
      <GetConnected
        Question={Questiondata?.Question}
        QuestionSubText={Questiondata?.QuestionSubText}
        email={Questiondata?.email}
        phone={Questiondata?.phone}
      />

      {/* map component */}
      <GoogleMap />

      {/* giving back community feedback component*/}
      <FeedBackComponent />
    </main>
  );
};

export default AboutUs;
