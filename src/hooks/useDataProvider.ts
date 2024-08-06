import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@payload-config';
import { CollectionSlug,CollectionTypeMap } from '@/types/collectionSlug/collectionslug';
// import { LandingpageDatum } from '@/payload-types';

export async function fetchPayloadData<K extends CollectionSlug>(
  collectionName: K,
):  Promise<CollectionTypeMap[K]> {
  const payload = await getPayloadHMR({ config: configPromise });
  const result = await payload.find({
    collection:collectionName,
  });
  const data = result.docs;
  return data[0] as  CollectionTypeMap[K];
}