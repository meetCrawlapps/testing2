import { About, Media } from '../../payload-types';
import { Feedback, Map, Network } from '@/payload-types';

export interface MapContent {
  Content: Map;
}
export type Location = Map['Locations'][0];

export interface FeedBackContent {
  Content: Feedback;
}

export type FeedBackCards = Feedback['FeedBackCards'][0];

export interface NetworkContent {
  Content: Network;
}

export type NetworkCard = Network['NetworkFigure'][0];

export interface AboutContent {
  Content: About;
}

export interface AboutAttribute {
  AboutUsAttributeMainImage: string | Media;
  AboutUsAttributeSubImage: string | Media;
  AboutUsAttributeTitle: string;
  AboutUsAttributeSubTitle: string;
  AboutUsAttributeAdvantages: {
    AboutUsAttributeAdvantage: string;
    id?: string | null;
  }[];
  id?: string | null;
}

export interface AboutpageContent {
  OwnerName: string;
  OwnerSubText: string;
  OwnerDetails: string;
  OwnerImage: string | Media;
}

export interface PrivacyPolicyContenttype {
  question?: string | null;
  answer?:
    | {
        answer_text?: string | null;
        id?: string | null;
      }[]
    | null;
  note?: string | null;
  notify?: string | null;
  notify_way?:
    | {
        notify_way_text?: string | null;
        id?: string | null;
      }[]
    | null;
  requirements?:
    | {
        requirment?: string | null;
        id?: string | null;
      }[]
    | null;
  points?:
    | {
        point?: string | null;
        id?: string | null;
      }[]
    | null;
  title?: string | null;
  desc?: string | null;
  id?: string | null;
}
export interface PrivacyPolicyContentData {
  content: PrivacyPolicyContenttype[];
}

export interface TermsAndConditionContent {
  title?: string | null;
  desc?:
    | {
        desc_text?: string | null;
        id?: string | null;
      }[]
    | null;
  note?: string | null;
  points?:
    | {
        point?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
}
export interface TermsAndConditionData {
  content: TermsAndConditionContent[];
}
