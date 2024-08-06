import {
  TermsAndConditionContent,
  TermsAndConditionData,
} from '@/types/dynamicDataTypes/AboutContent';
import React from 'react';

const TermsAndConditions: React.FC<TermsAndConditionData> = ({ content }) => {
  return (
    <section className="">
      <div></div>
      <div className="max-w-[920px] md:py-[100px] py-12 flex m-auto xs:px-4">
        <div className="grid gap-10">
          {content?.map((item: TermsAndConditionContent, index: number) => (
            <div key={index}>
              <div className="grid gap-3">
                {item?.title && (
                  <h2 className="text-que text-gray950">{item?.title}</h2>
                )}

                {item?.desc && item?.desc.length > 0 && item?.desc && (
                  <div className="grid gap-3">
                    {item?.desc?.map(
                      (
                        ans: {
                          desc_text?: string | null;
                          id?: string | null;
                        },
                        idx: number,
                      ) => (
                        <p className="text-desc text-gray500" key={idx}>
                          {ans.desc_text}
                        </p>
                      ),
                    )}
                  </div>
                )}

                {item?.note && (
                  <p>
                    <strong>{item?.note}</strong>
                  </p>
                )}

                {item?.points && item?.points?.length > 0 && item?.points && (
                  <ul className="gray-dots">
                    {item?.points?.map(
                      (
                        item: {
                          point?: string | null;
                          id?: string | null;
                        },
                        idx: number,
                      ) => (
                        <li key={idx} className="text-desc text-gray500">
                          {item.point}
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
