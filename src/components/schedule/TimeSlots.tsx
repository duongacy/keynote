import { TDay } from '@/apis-hooks/day/type';
import clsx from 'clsx';

export function TimeSlots({
  day,
  className,
}: {
  day: TDay;
  className?: string;
}) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-primary-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start + timeSlot.description}
          aria-label={`${timeSlot.speaker.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-secondary-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-primary-900">
            {timeSlot.speaker.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-primary-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-neutral-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start.slice(0, 5)}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end.slice(0, 5)}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  );
}
