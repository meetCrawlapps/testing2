import {
  Config,
  About,
  Aboutpage,
  Feedback,
  HeaderFooter,
  LandingpageDatum,
  Media,
  Network,
  PayloadMigration,
  PayloadPreference,
  PrivacyPolicy,
  Question,
  TermsAndCondition,
  Map,
} from '@/payload-types';
import { User } from 'payload';

export type CollectionSlug = keyof Config['collections'];

export type CollectionTypeMap = {
  users: User;
  media: Media;
  landingpage_data: LandingpageDatum;
  map: Map;
  'header-footer': HeaderFooter;
  feedback: Feedback;
  questions: Question;
  network: Network;
  about: About;
  aboutpage: Aboutpage;
  'privacy-policy': PrivacyPolicy;
  'terms-and-condition': TermsAndCondition;
  'payload-preferences': PayloadPreference;
  'payload-migrations': PayloadMigration;
};
