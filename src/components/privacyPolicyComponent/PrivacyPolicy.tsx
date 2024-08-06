import {
  PrivacyPolicyContentData,
  PrivacyPolicyContenttype,
} from '@/types/dynamicDataTypes/AboutContent';
import React from 'react';

const PrivacyPolicy: React.FC<PrivacyPolicyContentData> = ({ content }) => {
  return (
    <section>
      <div className="max-w-[920px] md:py-[100px] py-12 flex m-auto xs:px-4">
        <div className="grid gap-10">
          {content?.map((item: PrivacyPolicyContenttype, index: number) => (
            <div key={index} className="grid gap-3">
              {item?.question && (
                <h3 className="text-que text-gray950">{item?.question}</h3>
              )}
              {Array.isArray(item?.answer) && (
                <div className="grid gap-3">
                  {item?.answer?.map((ans: any, idx: number) => (
                    <p key={idx} className="text-desc text-gray500">
                      {ans?.answer_text}
                    </p>
                  ))}
                </div>
              )}

              {item?.note && (
                <p className="text-desc text-gray500">{item?.note}</p>
              )}

              {item?.points && item?.points.length > 0 && item?.points && (
                <ul className="text-desc text-gray500 gray-dots !pe-[20px]">
                  {item?.points?.map((item: any, idx: number) => (
                    <li key={idx}>{item.point}</li>
                  ))}
                </ul>
              )}

              {item?.notify && (
                <p className="text-desc text-gray500">{item?.notify}</p>
              )}

              {item?.notify_way &&
                item?.notify_way.length > 0 &&
                item?.notify_way && (
                  <ul className="text-desc text-gray500 gray-dots">
                    {item.notify_way.map((way: any, idx: number) => (
                      <li key={idx}>{way.notify_way_text}</li>
                    ))}
                  </ul>
                )}

              {item.title && (
                <h4 className="text-desc text-gray500">{item.title}</h4>
              )}

              {item?.requirements &&
                item?.requirements.length > 0 &&
                item?.requirements && (
                  <ul className="text-desc text-gray500 gray-dots">
                    {item?.requirements?.map((item: any, idx: number) => (
                      <li key={idx}>{item.requirment}</li>
                    ))}
                  </ul>
                )}

              {item?.desc && (
                <p className="text-desc text-gray500">{item?.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
