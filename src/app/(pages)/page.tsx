import ApproachAndExpertise from '@/components/approachAndExpertise/ApproachAndExpertise';
import Hero from '@/components/hero/Hero';
import MedicalCare from '@/components/medicalCare/MedicalCare';
import FinestNetwork from '@/components/finestNetwork/FinestNetwork';
import GetConnected from '@/components/getConnected/GetConnected';
import Testimonials from '@/components/testimonials/Testimonials';
import Feedback from '@/components/feedback/Feedback';
import Focus from '@/components/Focus/Focus';
import AboutComponent from '@/components/aboutComponent/AboutComponent';
import OurLocation from '@/components/ourLocation/OurLocation';
import { fetchPayloadData } from '@/hooks/useDataProvider';
import { withData } from '@/components/HOC/WrapData';
import { LandingpageDatum, Question } from '@/payload-types';

const GoogleMap = withData(OurLocation,'map'); //calling this withData function you can pass the component and second u have to pass the collection name for pass the data .
const FeedBackComponent = withData(Feedback,'feedback');
const NetworkComponent = withData(FinestNetwork,'network');
const AboutUsComponent = withData(AboutComponent,'about');
export default async function Home() {
  const data:LandingpageDatum = await fetchPayloadData('landingpage_data')
  const Questiondata:Question = await fetchPayloadData('questions')
  return (
    <main>
      {/*hero banner landing page */}
      <Hero title1={data?.TitleBold} title2={data?.TitleNormal} desc={data?.HelpText} />

      {/* focus component */}
      <Focus
        focusImage={data?.FocusImage}
        focusHeading= {data?.Focusheading}
        focusSubHeading= {data?.FocusSubHeading}
        focusAdvantages= {data?.FocusAdvantages}
        trustedCompanies= {data?.TrustedCompanes}
      />

      {/* approach and expertise component */}
      <ApproachAndExpertise 
        heading={data?.ApproachAndExpertiseHeading} 
        subheading={data?.ApproachAndExpertiseSubHeading} 
        mainImage={data?.ApproachAndExpertiseImage}
        topDesc={data?.ApproachAndExpertiseTopDiscription}
        expertise={data?.Expertise}
      />

      {/* AboutUs component */}
      <AboutUsComponent/>

      {/* medcalCare component */}
      <MedicalCare
        heading="Why Choose Cruize Medical Care?"
        subheading={data?.WhyChooseSubText}
        WhyChooseAttributes = {data?.WhyChooseAttributes}
      />

      {/* Houston's Finest Healthcare Network component */}
      <NetworkComponent/>

      {/* get connected section */}
      <GetConnected
        Question={Questiondata?.Question}
        QuestionSubText={Questiondata?.QuestionSubText}
        email={Questiondata?.email}
        phone={Questiondata?.phone}
      />

      {/* Testimonias component */}
      <Testimonials 
        Partners={data?.Partners}
      />

      {/* map component */}
      <GoogleMap />

      {/* backe to community feedback component */}
      <FeedBackComponent />
    </main>
  );
}
