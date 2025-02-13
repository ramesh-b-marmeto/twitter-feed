import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addFeed } from '../utils/feedSlice';

import jsonData from '../constants/feed.json' with { type: 'json' };
import NavBar from './NavBar';
import Feed from './Feed';
import Explore from './Explore';


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
    <div className='flex max-w-[1200px] mx-auto px-4'>
      <NavBar />
      <Feed />
      <Explore />
      <button className='fixed right-0 top-2' onClick={toggleTheme}>🌓</button>
    </div>
  )
}

export default Body