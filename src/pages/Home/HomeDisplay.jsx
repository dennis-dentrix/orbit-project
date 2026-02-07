import React from 'react'
import ProfileCard from './ProfileCard'

export default function HomeDisplay() {
  const profiles = [
    {
      name: 'Amina Njeri',
      service: 'Product Design',
      status: 'Available for chat',
    },
    {
      name: 'Kelvin Njeri',
      service: 'Backend Engineering',
      status: 'Available for chat',
    },
    {
      name: 'Hannah Wanjiru',
      service: 'Brand Strategy',
      status: 'Available for chat',
    },
    {
      name: 'Derrick Otieno',
      service: 'Frontend Engineering',
      status: 'Available for chat',
    },
    {
      name: 'Grace Achieng',
      service: 'UX Research',
      status: 'Available for chat',
    },
    {
      name: 'Samuel Kariuki',
      service: 'Mobile Development',
      status: 'Available for chat',
    },
  ]

  return (
    <div className='w-full'>
      <div className='flex w-full flex-col gap-3 rounded-2xl border border-border bg-linear-to-r from-offWhite via-background to-tertiary/15 px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <p className='text-xl font-semibold uppercase tracking-[0.15em] text-primary'>
            Services
          </p>
          <h3 className='mt-1 text-[13px] font-semibold text-primary/90'>
            Find the right help fast
          </h3>
        </div>

        <div className='flex flex-wrap items-center gap-2'>
          <button className='rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'>
            Start Chat
          </button>
          <button className='rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-text shadow-sm transition hover:border-textTertiary/40 hover:bg-offWhite focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30'>
            Invite
          </button>
        </div>
      </div>

      {/* <div className="mt-6 rounded-3xl border border-border bg-offWhite/40 p-4 sm:p-6"> */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} profile={profile} />
        ))}
      </div>
      {/* </div> */}



    </div>
  )
}
