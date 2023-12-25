'use client';
import { useGetHeroSingle } from '@/apis-hooks/hero-single';
import { BackgroundImage } from '@/components/BackgroundImage';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import ReactMarkdown from 'react-markdown';

export function Hero() {
  const heroSingle = useGetHeroSingle();

  if (heroSingle.isLoading || heroSingle.isError || !heroSingle.data)
    return null;
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-primary-600 sm:text-7xl">
            <span className="sr-only"> {heroSingle.data.titleSrOnly} </span>
            {heroSingle.data.title}
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-primary-900">
            <ReactMarkdown>{heroSingle.data.content}</ReactMarkdown>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            {heroSingle.data.ctaText}
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {heroSingle.data.statistics?.map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-primary-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-primary-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
