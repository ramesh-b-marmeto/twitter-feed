import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import PostCard from './PostCard';
import { useSelector } from 'react-redux';

const Feed = () => {

  const feeds = useSelector(store => store.feed);
  const params = useParams();
  console.log(params);
  const filterParam = params?.tag ;
  let filteredFeeds ;
  if(filterParam){
    filteredFeeds = useMemo(() => feeds?.filter(feed => feed.post_text.includes(`#${filterParam}`)), [feeds]);
  }
  else {
    filteredFeeds = feeds ;
  }

  let paginatedFeeds = filteredFeeds?.slice(0,10);
  console.log(filteredFeeds)

  if(!feeds) {
    return
  }

  return (
    <div className='flex-1 pt-2'>
      <header className='feed-header flex md:hidden justify-center pb-4'>
        <div className='w-8 h-8'>
          <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </div>
      </header>
      <div className='flex justify-center border-current border-solid border-spacing-1'>
        <h3 className='theme-border w-fit text-2xl font-semibold text-center pb-2'>For you</h3>
      </div>
      <div className='feed-posts--wrapper flex flex-col items-center mt-6'>
        {paginatedFeeds.map((feed)=>{
          return (
          <div key={feed.id} className='main-card--wrapper'>
            <PostCard post={feed}/>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Feed