import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faComment} from "@fortawesome/free-solid-svg-icons";
import { faUpload} from "@fortawesome/free-solid-svg-icons";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { faCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer"




const PostItem = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="wd-left-padding wd-top-padding">
                <div className="wd-pos-relative">
                    <img className="wd-img-avatar" src={post.image}/>
                </div>
                <div className="wd-pos-relative-nudge-left">
                    <div className="wd-bot-padding">
                        <div className="wd-bot-padding wd-max-width-content">
                            <span className=" wd-font-content">{post.userName} </span>

                            <FontAwesomeIcon icon={faCircle} className="wd-fg-color-blue"/>
                            <span className=" wd-font-content "> {post.handle} - {post.time}</span>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(post._id)}></i>
                            <br/>
                        </div>
                        <span className=" wd-font-content wd-max-width-content"> {post.topic}</span>
                    </div>
                    <div className=" wd-max-width-content wd-bot-margin">

                        <div className="wd-left-padding">
                            <span className=" wd-font-content wd-max-width-content">{post.tuit}</span>
                            <br/>
                        </div>
                    </div>

                    <div>
                        <ul className="wd-icons-list">
                            <li><a href="#" className=" wd-link-no-underline">
                                <FontAwesomeIcon icon={faComment} />
                                <span className="wd-left-padding">{post.replies}</span></a></li>
                            <li><a href="#" className=" wd-link-no-underline">
                                <FontAwesomeIcon icon={faRetweet} />
                                <span className="wd-left-padding">{post.retuits}</span></a></li>
                            <li><a href="#" className= {post.liked === true ? "wd-fg-color-red wd-link-no-underline":"wd-link-no-underline" }>
                                <FontAwesomeIcon icon={faHeart} />
                                <span className="wd-left-padding">{post.likes}</span></a></li>
                            <li><a href="#" className=" wd-link-no-underline">
                                <FontAwesomeIcon icon={faUpload} />
                            </a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="wd-border-bot"></div>
        </li>
    );
};
export default PostItem;