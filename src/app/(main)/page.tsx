import { Hero } from '@/components/hero/Hero'
import { Newsletter } from '@/components/signup/Newsletter'
import { Schedule } from '@/components/schedule/Schedule'
import { Speakers } from '@/components/speakers/Speakers'
import { Sponsors } from '@/components/sponsors/Sponsors'
import React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function Home() {
  return (
    <>
      <Hero />
      <Speakers />
      <Schedule />
      <Sponsors />
      <Newsletter />
    </>
  )
}
