import React from 'react'

const Explore = () => {
  return (
    <div className='exlore-side-bar hidden lg:block sticky top-0 max-h-[100vh] pt-2'>
      <h3 className='text-2xl font-semibold'>Explore</h3>
      <div className='w-[150px] rounded-full py-8'>
        <h3 className='text-xl pb-4'>Trending now </h3>
        <ul className='list-none space-y-4'>
          <li className='hashtag'>#News</li>
          <li className='hashtag'>#Sports</li>
          <li className='hashtag'>#Movie</li>
          <li className='hashtag'>#AI</li>
        </ul>
      </div>
    </div>
  )
}

export default Explore