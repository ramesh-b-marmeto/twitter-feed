import React from 'react'
import Like from '../assets/Like'
import Bookmark from '../assets/BookMark'
import RetweetIcon from '../assets/Retweet'
import { useDispatch } from 'react-redux'
import { updateLike } from '../utils/feedSlice'

const PostCard = ({ post , key , index }) => {

  const dispatch = useDispatch();
  let lazy = true ;

  if(index === 0){
    lazy = false ;
  }

  const likeHandler = ()=>{
    if(post.isLiked){
      dispatch(updateLike({id : post.id , type : 'remove' }));
    }
    else {
      dispatch(updateLike({id : post.id , type : 'add' }));
    }
  }

  return (
      <div className='post-card--wrapper max-w-[600px] py-4' key={key}>
        <div className='post-user-profile flex gap-2'>
          <img className='rounded-full' src={post.profile_picture_url} alt="profile image" width={40} height={40} />
          <h3 className='font-bold'>{post.name}</h3>
          <h3 className='opacity-50'>{post.username}</h3>
          <span className='opacity-50'>:</span>  
          <span className='opacity-50'>{post.timeline}</span>
        </div>
        <div className='post-description pl-12 mt-[-12px] flex flex-col gap-4'>
          <div className='post-text'>
            <p dangerouslySetInnerHTML={{ __html: post.post_text }}></p>
          </div>
          <div className='image-container post-image w-full  rounded-md'>
            <img src={post.post_media_url} alt="post image" className='w-full h-auto' fetchPriority={ lazy ? 'low' : 'high'} loading={ lazy ? 'lazy' : 'eager'}  />
          </div>
          <div className='post-stats flex justify-around'>
            <div className='flex gap-1 items-center'>
              <Like className={ post.isLiked ? 'cursor-pointer selected ' : 'cursor-pointer '} onClick={likeHandler} />
              {post.stats.likes}
            </div>
            <div className='flex gap-1 items-center'>
              <RetweetIcon />
              {post.stats.retweets}
            </div>
            <div className='flex gap-1 items-center'>
              <Bookmark />
              {post.stats.comments}
            </div>
          </div>
        </div>
      </div>
  )
}

export default PostCard