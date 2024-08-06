import { PageHeading } from '@/components/common/HeroHeding';
import TermsAndConditions from '@/components/termsAndConditions/TermsAndConditions';
import { fetchPayloadData } from '@/hooks/useDataProvider';
import { TermsAndCondition } from '@/payload-types';
import React from 'react';

const page = async() => {
  const data:TermsAndCondition = await fetchPayloadData('terms-and-condition')
  return (
    <>
      <PageHeading
        heading={data?.TermsAndConditionTitle}
        subheading={data?.TermsAndConditionSubText}
      />

      <main>
        <TermsAndConditions content={data?.TermsAndConditionContent} />
      </main>
    </>
  );
};

export default page;
