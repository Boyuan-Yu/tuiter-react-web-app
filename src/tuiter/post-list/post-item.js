import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faComment} from "@fortawesome/free-solid-svg-icons";
import { faUpload} from "@fortawesome/free-solid-svg-icons";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { faCircle} from "@fortawesome/free-solid-svg-icons";


const PostItem = (
    {
        post = {
            "_id": 123,
            "topic": "Happy Day",
            "userName": "Spongebob",
            "userID": "Best_Spongebob",
            "date": "Oct 1",
            "avatar": "spongebob1.jpg",
            "title": "Sed est leo, porta eget vestibulum eu, feugiat vel eros...",
            "content": "Nullam a leo nulla. Nam felis nibh, fermentum eu hendrerit eu, eleifend a massa. Duis ultrices velit vestibulum, eleifend sem id, ultricies lorem.",
            "image": "spongebob_all.jpg",
            "likesNum": "34",
            "commentNum": "26",
            "shareNum": "11"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="wd-left-padding wd-top-padding">
                <div className="wd-pos-relative">
                    <img className="wd-img-avatar" src={post.avatar}/>
                </div>
                <div className="wd-pos-relative-nudge-left">
                    <div className="wd-bot-padding">
                        <div className="wd-bot-padding">
                            <span className=" wd-font-content">{post.userName} </span>

                            <FontAwesomeIcon icon={faCircle} className="wd-fg-color-blue"/>
                            <span className=" wd-font-content "> {post.userID} - {post.date}</span>
                        <br/>
                    </div>
                    <span className=" wd-font-content wd-max-width-content"> {post.topic}</span>
                </div>
                <div className="wd-img-text-border wd-max-width-content wd-bot-margin">
                    <div className="wd-border-bot wd-bot-margin">
                        <img src={post.image} width="504px" height="264px" className="wd-img-round-top-corner"/>
                    </div>

                    <div className="wd-left-padding">
                        <span className="wd-fg-color-white wd-font-content wd-max-width-content">{post.title}</span>
                    <br/>
                    <span className=" wd-font-content wd-max-width-content">{post.content}</span>
                    <br/>
                </div>
            </div>

            <div>
                <ul className="wd-icons-list">
                    <li><a href="#" className=" wd-link-no-underline">
                        <FontAwesomeIcon icon={faComment} />
                        <span className="wd-left-padding">{post.commentNum}</span></a></li>
                    <li><a href="#" className=" wd-link-no-underline">
                        <FontAwesomeIcon icon={faRetweet} />
                        <span className="wd-left-padding">{post.shareNum}</span></a></li>
                    <li><a href="#" className="wd-fg-color-red wd-link-no-underline">
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="wd-left-padding">{post.likesNum}</span></a></li>
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