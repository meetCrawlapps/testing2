import { Media } from '@/payload-types';
export interface Advantage {
  Advantage?: string | null;
  id?: string | null;
}

export interface trustedCompanie {
  TrustedCompanesImage: string | Media;
  id?: string | null;
}
export interface FocusContent {
  focusImage?: Media | string;
  focusHeading?: string;
  focusSubHeading?: string;
  focusAdvantages?: Advantage[] | null | undefined;
  trustedCompanies: trustedCompanie[];
  classNameprops?: string;
}
