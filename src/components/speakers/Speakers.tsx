'use client'
import { getAllDays } from '@/apis/day'
import { getSpeakersSingle, getSpeakersSingleKey } from '@/apis/speaker-single'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Tab } from '@headlessui/react'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import moment from 'moment'
import Image from 'next/image'
import { useEffect, useId, useState } from 'react'
import { ImageClipPaths } from './ImageClipPaths'


export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  const speakerQuery = useQuery({
    queryKey: ['days'],
    queryFn: getAllDays
  })

  const speakersSingleQuery = useQuery({
    queryKey: getSpeakersSingleKey(),
    queryFn: getSpeakersSingle
  })

  if (speakersSingleQuery.isLoading && !speakersSingleQuery.data) {
    return 'loading'
  }

  if (speakersSingleQuery.isError) {
    return 'error'
  }
  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-primary-600 sm:text-5xl"
          >
            {speakersSingleQuery.data!.title}
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-primary-900">
            {speakersSingleQuery.data!.description}
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-neutral-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {(speakerQuery.data ?? []).map((day, dayIndex) => (
                    <div key={day.name} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-primary-600 stroke-primary-600'
                            : 'fill-transparent stroke-neutral-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-primary-600'
                              : 'text-neutral-500',
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-primary-900"
                        >
                          {moment(day.dateTime).format('MMMM D')}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {(speakerQuery.data || []).map((day) => (
              <Tab.Panel
                key={day.name}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speaker.name + 'lll'}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-primary-300',
                            'border-secondary-300',
                            'border-sky-300',
                          ][speakerIndex % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-secondary-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={process.env.API_ENDPOINT + speaker.image.url}
                          fill
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-neutral-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-neutral-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}


