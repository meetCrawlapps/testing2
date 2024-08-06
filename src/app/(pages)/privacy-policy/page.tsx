import { PageHeading } from '@/components/common/HeroHeding';
import PrivacyPolicy from '@/components/privacyPolicyComponent/PrivacyPolicy';
import { fetchPayloadData } from '@/hooks/useDataProvider';
import { PrivacyPolicy as PrivacyPolicyType } from '@/payload-types';
import React from 'react';
const page = async() => {
  const data:PrivacyPolicyType = await fetchPayloadData('privacy-policy')
  return (
    <>
      <PageHeading
        heading={data?.PrivacyPolicyTitle}
        subheading={data?.PrivacyPolicySubText}
      />
      <main>
        <PrivacyPolicy content={data?.PrivacyPolicyContent} />
      </main>
    </>
  );
};

export default page;
