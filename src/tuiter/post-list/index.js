import React from "react";
import PostItem from "./post-item.js";
import "./index.css"
import {useSelector} from "react-redux";


const PostList = () => {
    const postsArray = useSelector(state => state.posts)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;