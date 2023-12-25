'use client';
import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { DaySummary } from './DaySummary';
import { TimeSlots } from './TimeSlots';
import { TDay } from '@/apis-hooks/day/type';

export function ScheduleTabbed({ schedule }: { schedule: TDay[] }) {
  let [tabOrientation, setTabOrientation] = useState('horizontal');
  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)');

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(smMediaQuery);
    smMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.name + 'xx'}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary day={day} />
                <Tab className="ui-not-focus-visible:outline-none">
                  <span className="absolute inset-0" />
                  {day.name}
                </Tab>
              </div>
            ))}
          </>
        )}
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.name}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
