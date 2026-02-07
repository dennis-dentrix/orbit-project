import { NavLink } from "react-router-dom"
import profileImg from "/profile.jpeg"

export default function ProfileCard({ profile }) {
  const data = {
    // name: 'Amina Njeri',
    // service: 'Product Design',
    // status: 'Available for chat',
    // image: profileImg,
    ...profile,
  }
  return (
    <div className='w-full max-w-sm rounded-2xl border border-border bg-white/80 p-4 shadow-sm'>
      <div className='flex items-center gap-4'>
        <div className='h-20 w-20 rounded-xl border border-border bg-offWhite p-1'>
          <img
            src={data.image || profileImg}
            alt='profile'
            className='h-full w-full rounded-lg object-cover'
          />
        </div>
        <div>
          <p className='text-[11px] font-semibold uppercase tracking-[0.15em] text-textTertiary'>
            Profile
          </p>
          <h4 className='mt-1 text-lg font-semibold text-text'>{data.name}</h4>
          <p className='text-xs text-textSecondary'>{data.service}</p>
          <p className='mt-1 text-[11px] font-semibold text-primary/80'>
            {data.status}
          </p>
        </div>
      </div>

      <div className='mt-4 flex items-center justify-between gap-3'>
        <div className='flex flex-wrap gap-2'>
          <span className='rounded-full bg-offWhite px-3 py-1 text-xs font-semibold text-textSecondary'>
            Verified
          </span>
          <span className='rounded-full bg-tertiary/20 px-3 py-1 text-xs font-semibold text-text'>
            Fast Response
          </span>
        </div>
        <button className='rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'>
          <NavLink to={"/chat"} >

            Message
          </NavLink>
        </button>
      </div>
    </div>
  )
}
