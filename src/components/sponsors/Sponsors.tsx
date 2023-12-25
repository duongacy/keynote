'use client';
import Image from 'next/image';

import { useGetAllSponsors } from '@/apis-hooks/sponsor';
import { useGetSponsorsSingle } from '@/apis-hooks/sponsors-single';
import { Container } from '@/components/Container';

export function Sponsors() {
  const sponsorsQuery = useGetAllSponsors();
  const sponsorsSingleQuery = useGetSponsorsSingle();

  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-primary-900 sm:text-5xl">
          {sponsorsSingleQuery.data?.title}
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsorsQuery.data?.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image
                src={process.env.API_ENDPOINT + sponsor.logo.url}
                alt={sponsor.name}
                unoptimized
                width={sponsor.logo.width}
                height={sponsor.logo.height}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
