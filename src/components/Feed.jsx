import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostCard from './PostCard';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';

const Feed = () => {

  const feeds = useSelector(store => store.feed);
  const params = useParams();
  console.log(params);
  const filterParam = params?.tag;

  const [pageNum, setPageNum] = useState(parseInt(params?.pageNum) || 1);

  console.log("pageNum", pageNum);
  let filteredFeeds;
  if (filterParam) {
    filteredFeeds = useMemo(() => feeds?.filter(feed => feed.post_text.includes(`#${filterParam}`)), [feeds]);
  }
  else {
    filteredFeeds = feeds;
  }
  let perPage = 10;
  // let paginatedFeeds = filteredFeeds?.slice(pageNum-1*perPage,pageNum*perPage);
  let paginatedFeeds = filteredFeeds?.slice((pageNum - 1) * perPage, pageNum * perPage);
  console.log("paginatedFeeds", paginatedFeeds)

  if (!feeds) {
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
        {paginatedFeeds.length !== 0 ? paginatedFeeds.map((feed) => {
          return (
            <div key={feed.id} className='main-card--wrapper'>
              <PostCard post={feed} />
            </div>
          )
        }) : <h2 className='text-4xl text-center my-auto'>You all caught up</h2>}
      </div>
      <div className='pagination--wrapper flex justify-center pb-4'>
        <Pagination
          pageNum={pageNum}
          perPage={perPage}
          totalItems={filteredFeeds.length}
          onPageChange={setPageNum}
        />
      </div>
    </div>
  )
}

export default Feed