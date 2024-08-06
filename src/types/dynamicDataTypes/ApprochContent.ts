import { Media } from '@/payload-types';

export interface ExpertiseItem {
  ExpertiseImage: string | Media;
  Expertise?: string | null;
  ExpertiseSubText?: string | null;
  id?: string | null;
}

export interface ApprochContent {
  heading?: string;
  subheading?: string;
  mainImage?: Media | string;
  topDesc?: string;
  expertise?: ExpertiseItem[] | null;
}
