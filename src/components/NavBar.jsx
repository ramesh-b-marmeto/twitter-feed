import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='hidden md:flex sticky top-0 max-h-[100vh] py-4 side-navbar flex-col justify-between'>
      <div>
        <div className='w-8 h-8 nav-bar-inner'>
          <Link to={'/'}>
            <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
          </Link>
        </div>
        <ul className='list-none space-y-8 text-[26px] mt-8'>
          <li className='flex gap-2'>🏠 <span className='hidden lg:block'>Home</span>  </li>
          <li className='flex gap-2'>🌎 <span className='hidden lg:block'>Explore</span>  </li>
          <li className='flex gap-2'>📰 <span className='hidden lg:block'>News</span>  </li>
          <li className='flex gap-2'>❤ <span className='hidden lg:block'>Saved</span>  </li>
        </ul>
      </div>
      <div className='overflow-hidden'>
        <img className='rounded-full' src='https://randomuser.me/api/portraits/men/89.jpg' width={32} height={32} alt="" />
      </div>
    </div>
  )
}

export default NavBar