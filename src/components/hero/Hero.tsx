'use client'
import { getHeroSingle, getHeroSingleKey } from '@/apis/hero-single'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useQuery } from '@tanstack/react-query'
import ReactMarkdown from 'react-markdown'

export function Hero() {
  const heroQuery = useQuery({
    queryKey: getHeroSingleKey(),
    queryFn: getHeroSingle
  })
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">

        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          {(heroQuery.isLoading && !heroQuery.data) && <Skeleton />}
          {heroQuery.data && <>
            <h1 className="font-display text-5xl font-bold tracking-tighter text-primary-600 sm:text-7xl">
              <span className="sr-only"> {heroQuery.data!.titleSrOnly} </span>
              {heroQuery.data!.title}
            </h1>
            <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-primary-900">
              <ReactMarkdown>
                {heroQuery.data!.content}
              </ReactMarkdown>
            </div>
            <Button href="#" className="mt-10 w-full sm:hidden">
              {heroQuery.data!.ctaText}
            </Button>
            <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
              {heroQuery.data!.statistics.map(([name, value]) => (
                <div key={name}>
                  <dt className="font-mono text-sm text-primary-600">{name}</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-primary-900">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </>}

        </div>
      </Container>
    </div>
  )
}

function Skeleton() {
  return <div role="status" className="animate-pulse h-96">
    <div className="h-10 bg-neutral-200 rounded-full dark:bg-neutral-700 mb-4"></div>
    <div className="h-10 bg-neutral-200 rounded-full dark:bg-neutral-700  mb-2.5"></div>
    <div className="h-10 bg-neutral-200 rounded-full dark:bg-neutral-700 mb-2.5"></div>
    <div className="h-10 bg-neutral-200 rounded-full dark:bg-neutral-700  mb-2.5"></div>
    <div className="h-10 bg-neutral-200 rounded-full dark:bg-neutral-700  mb-2.5"></div>
    <div className="h-10 bg-neutral-200 rounded-full dark:bg-neutral-700 "></div>
  </div>
}