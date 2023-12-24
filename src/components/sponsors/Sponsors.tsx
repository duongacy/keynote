'use client'
import Image from 'next/image'

import { getAllSponsors, getAllSponsorsKey } from '@/apis/sponsor'
import { getSponsorsSingle, getSponsorsSingleKey } from '@/apis/sponsors-single'
import { Container } from '@/components/Container'
import { useQuery } from '@tanstack/react-query'

export function Sponsors() {

  const sponsorsQuery = useQuery({ queryKey: getAllSponsorsKey(), queryFn: getAllSponsors })
  const SponsorsSingleQuery = useQuery({ queryKey: getSponsorsSingleKey(), queryFn: getSponsorsSingle })

  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-primary-900 sm:text-5xl">
          {SponsorsSingleQuery.data?.title}
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsorsQuery.data?.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={process.env.API_ENDPOINT + sponsor.logo.url} alt={sponsor.name} unoptimized width={sponsor.logo.width} height={sponsor.logo.height} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}