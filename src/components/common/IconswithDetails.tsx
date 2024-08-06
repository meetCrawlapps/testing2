import { IconsAndData } from '@/types/getintouchdata/iconwithdetailstype';
import Image from 'next/image';

const IconswithDetails = ({ img, questions, answerlink }: IconsAndData) => {
  return (
    <div>
      <div>
        <Image alt="image" src={img} width={100} height={100} />
      </div>
      <div>
        <span>{questions}</span>
      </div>
    </div>
  );
};

export default IconswithDetails;
