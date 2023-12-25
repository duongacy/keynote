import { useQuery } from '@tanstack/react-query';
import { flattenArrayObject } from '../flatten';
import { TDay } from './type';

export const getAllDays = async () => {
  const result = await fetch(
    process.env.API_ENDPOINT + '/api/days?populate=deep',
  );
  const resultJson = await result.json();

  return resultJson.data.map((item: any) => ({
    ...item,
    timeSlots: flattenArrayObject(item.timeSlots),
  })) as TDay[];
};

export const useGetAllDays = () =>
  useQuery({ queryKey: ['days'], queryFn: getAllDays });
