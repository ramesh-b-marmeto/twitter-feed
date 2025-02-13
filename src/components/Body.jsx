import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addFeed } from '../utils/feedSlice';

import jsonData from '../constants/feed.json' with { type: 'json' };
import NavBar from './NavBar';
import Feed from './Feed';
import Explore from './Explore';
import DarkLight from '../assets/DarkLight';


const Body = () => {

  const dispatch = useDispatch();

  const toggleTheme = ()=>{
    if(document.body.dataset.theme === "dark"){
      document.body.dataset.theme = "default"
    }
    else {
      document.body.dataset.theme = "dark"
    }
  }

  useEffect(() => {
    if(localStorage.getItem("feedData")){
      const exisitingFeedDataJSON = localStorage.getItem("feedData");
      const exisitingFeedData = JSON.parse(exisitingFeedDataJSON);
      dispatch(addFeed(exisitingFeedData));
      console.log('setting data from exisiting localStorage');
    }
    else {
      dispatch(addFeed(jsonData));
      localStorage.setItem("feedData" , JSON.stringify(jsonData));
      console.log('setting data from fetched feedData');
    }
  }, [])


  return (
    <div className='flex max-w-[1200px] mx-auto px-4 relative'>
      <NavBar />
      <Feed />
      <Explore />
      <div className='fixed w-full h-full pr-4 flex items-baseline justify-end lg:justify-start lg:pl-14 lg:mt-1 pointer-events-none'>
      <button className='p-4 pointer-events-auto' onClick={toggleTheme}><DarkLight /></button>
      </div>
    </div>
  )
}

export default Body