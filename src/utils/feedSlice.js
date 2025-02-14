import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name : 'feed',
  initialState : null,
  reducers : {
    addFeed : (state , action) => {
      return action.payload;
    },
    updateLike : (state , action) => {
      const { id , type }= action.payload ;
      const feed = state.find((feed)=>feed.id === id);
      if(type === 'add'){
        feed.stats.likes = parseInt(feed.stats.likes)+1;
        feed.isLiked = true;
      }
      else {
        feed.stats.likes = parseInt(feed.stats.likes)-1;
        feed.isLiked = false;
      }
      localStorage.setItem("feedData" , JSON.stringify(state));
    }
  }
})

export const { addFeed , updateLike } = feedSlice.actions ;
export default feedSlice.reducer;