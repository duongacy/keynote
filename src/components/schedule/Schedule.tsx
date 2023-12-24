'use client';
import { getAllDays } from '@/apis/day';
import { getSchedulesSingle, getSchedulesSingleKey } from '@/apis/schedule-single';
import { BackgroundImage } from '@/components/BackgroundImage';
import { Container } from '@/components/Container';
import { useQuery } from '@tanstack/react-query';
import { ScheduleStatic } from './ScheduleStatic';
import { ScheduleTabbed } from './ScheduleTabbed';


export function Schedule() {

  const daysQuery = useQuery({
    queryKey: ['days'],
    queryFn: getAllDays,
  })

  const schedulesSingleQuery = useQuery({
    queryKey: getSchedulesSingleKey(),
    queryFn: getSchedulesSingle,
  })

  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      {schedulesSingleQuery.data &&
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-primary-600 sm:text-5xl">
              {schedulesSingleQuery.data.title}
            </h2>
            <p className="mt-4 font-display text-2xl tracking-tight text-primary-900">
              {schedulesSingleQuery.data.description}
            </p>
          </div>
        </Container>}

      {daysQuery.data &&
        <div className="relative mt-14 sm:mt-24">
          <BackgroundImage position="right" className="-bottom-32 -top-40" />
          <Container className="relative">
            <ScheduleTabbed schedule={daysQuery.data} />
            <ScheduleStatic schedule={daysQuery.data} />
          </Container>
        </div>
      }
    </section>
  );
}
