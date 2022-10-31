import { createSlice } from "@reduxjs/toolkit";
import posts from './posts.json';

const postsSlice = createSlice({
    name: 'posts',
    initialState: posts,
    reducers:{
        likeButton(state, action){
            const post = state.find((post) =>
                post._id === action.payload)
            post.liked = !post.liked
        }
    }
});

export const {likeButton} = postsSlice.actions
export default postsSlice.reducer;