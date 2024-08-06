import { fetchPayloadData } from "@/hooks/useDataProvider";

type CollectionName =
  | 'users'
  | 'media'
  | 'landingpage_data'
  | 'map'
  | 'header-footer'
  | 'feedback'
  | 'questions'
  | 'network'
  | 'about'
  | 'aboutpage'
  | 'privacy-policy'
  | 'terms-and-condition'
  | 'payload-preferences'
  | 'payload-migrations';

export const withData = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  collection: CollectionName,
) => {
  const getdata = async () => {
    const data = await fetchPayloadData(collection);
    return data;
  };
  return async (props: any) => {
    const data = await getdata();
    return <WrappedComponent {...(props as P)} Content={data} />;
  };
};