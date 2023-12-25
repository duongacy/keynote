'use client';
import Image from 'next/image';

import { useGetSignupSingle } from '@/apis-hooks/signup-single';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-newsletter.jpg';
import { ArrowRightIcon } from '../ArrowRightIcon';

export function Newsletter() {
  const signupQuery = useGetSignupSingle();

  if (signupQuery.isLoading || !signupQuery.data || signupQuery.isError) {
    return null;
  }

  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-secondary-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-primary-900 sm:text-5xl">
                {signupQuery.data!.title}
              </p>
              <p className="mt-4 text-lg tracking-tight text-primary-900">
                {signupQuery.data!.description}
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-primary-900">
                Sign up to our newsletter <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex overflow-hidden rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-primary-900/5 focus-within:ring-2 focus-within:ring-primary-900">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  className="bg-transparent -my-2.5 flex-auto pl-6 pr-2.5 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                />
                <Button type="submit">
                  <span className="sr-only sm:not-sr-only">Sign up today</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
