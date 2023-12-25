import { TDay } from '@/apis-hooks/day/type';
import moment from 'moment';

export function DaySummary({ day }: { day: TDay }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-primary-900">
        <time dateTime={day.dateTime}>
          {moment(day.dateTime).format('MMMM D')}
        </time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-primary-900">
        {day.summary}
      </p>
    </>
  );
}
