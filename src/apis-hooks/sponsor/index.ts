import { useQuery } from '@tanstack/react-query';
import { TSponsor } from './type.sponsor';

export const getAllSponsors = async (): Promise<TSponsor[]> => {
  const result = await fetch(
    process.env.API_ENDPOINT + '/api/sponsors?populate=deep',
  );
  const resultJson = await result.json();

  return resultJson.data as TSponsor[];
};

export const useGetAllSponsors = () =>
  useQuery({ queryKey: ['sponsors'], queryFn: getAllSponsors });
