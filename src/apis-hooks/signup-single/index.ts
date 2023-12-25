import { useQuery } from '@tanstack/react-query';
import { TSignupSingle } from './type.signup-single';

export const getSignupSingle = async () => {
  const result = await fetch(process.env.API_ENDPOINT + '/api/signup-single');
  const resultJson = await result.json();

  return resultJson.data as TSignupSingle;
};

export const useGetSignupSingle = () =>
  useQuery({ queryKey: ['signup-single'], queryFn: getSignupSingle });
