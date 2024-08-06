import { Media } from '@/payload-types';

// Type guard to determine if a value is a Media object
export const isMedia = (value: string | Media): value is Media => {
  return (value as Media).url !== undefined;
};
