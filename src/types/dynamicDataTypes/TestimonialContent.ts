import { Media } from '@/payload-types';

export interface Partner {
  PartnerImage: string | Media;
  PartnersComapanysImage: string | Media;
  PartnerInformation: string;
  PartnerOtherDetail: string;
  PartnerPosition: string;
  id?: string | null;
}

export interface TestimonialContent {
  Partners: Partner[];
}
