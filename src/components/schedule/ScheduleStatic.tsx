import { TDay } from '@/apis/day/type';
import { DaySummary } from './DaySummary';
import { TimeSlots } from './TimeSlots';

export function ScheduleStatic({ schedule }: { schedule: TDay[]; }) {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.name + 'yy'}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  );
}
