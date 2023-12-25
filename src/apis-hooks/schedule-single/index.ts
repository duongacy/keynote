import { useQuery } from '@tanstack/react-query';
import { TScheduleSingle } from './type.schedule-single';

export const getSchedulesSingle = async () => {
  const result = await fetch(
    process.env.API_ENDPOINT + '/api/schedules-single',
  );
  const resultJson = await result.json();

  return resultJson.data as TScheduleSingle;
};

export const useGetSchedulesSingle = () =>
  useQuery({ queryKey: ['schedules-single'], queryFn: getSchedulesSingle });
