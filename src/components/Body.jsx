import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addFeed } from '../utils/feedSlice';

import jsonData from '../constants/feed.json' with { type: 'json' };
import NavBar from './NavBar';
import Feed from './Feed';
import Explore from './Explore';


const Body = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addFeed(jsonData));
  }, [])


  return (
    <div className='flex max-w-[1200px] mx-auto'>
      <NavBar />
      <Feed />
      <Explore />
    </div>
  )
}

export default Body