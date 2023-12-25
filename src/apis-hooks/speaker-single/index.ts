import { useQuery } from '@tanstack/react-query';
import { TSpeakersSingle } from './type.speakers-single';

export const getSpeakersSingle = async () => {
  const result = await fetch(process.env.API_ENDPOINT + '/api/speakers-single');
  const resultJson = await result.json();

  return resultJson.data as TSpeakersSingle;
};

export const useGetSpeakersSingle = () =>
  useQuery({ queryKey: ['speakers-single'], queryFn: getSpeakersSingle });
