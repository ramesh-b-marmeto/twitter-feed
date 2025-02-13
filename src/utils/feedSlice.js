import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name : 'feed',
  initialState : null,
  reducers : {
    addFeed : (state , action) => {
      return action.payload;
    },
    updateLike : (state , action) => {
      console.log("state",state)
      console.log("action",action.payload)
      let id = action.payload ;
      const feed = state.find((feed)=>feed.id === id);
      feed.isLiked = true;

      localStorage.setItem("feedData" , JSON.stringify(state));
    }
  }
})

export const { addFeed , updateLike } = feedSlice.actions ;
export default feedSlice.reducer;