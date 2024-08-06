import { metadata } from './app/(pages)/layout';
import { Landingpage_Data } from './collections/LandingPage';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Map } from './collections/Map';
import { HeaderFooter } from './collections/HeaderFooter';
import { Feedback } from './collections/Feedback';
import { Questions } from './collections/Questions';
import { Network } from './collections/Network';
import { AboutUs } from './collections/AboutContent';
import { AboutPage } from './collections/AboutUsPage';
import { PrivacyPolicy } from './collections/PrivacyPolicy';
import { TermsAndCondition } from './collections/TermsAndCondition';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Landingpage_Data,
    Map,
    HeaderFooter,
    Feedback,
    Questions,
    Network,
    AboutUs,
    AboutPage,
    PrivacyPolicy,
    TermsAndCondition,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
});
