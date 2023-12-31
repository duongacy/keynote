import { useQuery } from '@tanstack/react-query';
import { TSponsorsSingle } from './type.sponsor-single';

export const getSponsorsSingle = async (): Promise<TSponsorsSingle> => {
  const result = await fetch(process.env.API_ENDPOINT + '/api/sponsors-single');
  const resultJson = await result.json();

  return resultJson.data as TSponsorsSingle;
};

export const useGetSponsorsSingle = () =>
  useQuery({ queryKey: ['sponsors-single'], queryFn: getSponsorsSingle });
