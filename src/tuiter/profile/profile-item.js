import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocation, faBirthdayCake, faCalendar } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom';

const ProfileItem = (
    {
        profile = {
            "firstName": "Jose", "lastName": "Annunziato", "handle": "@jannunzi",
            "profilePicture": "jose.png", "bannerPicture": "polyglot.png",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA", "dateOfBirth": "7/7/1968", "dateJoined": "4/2009",
            "followingCount": 340, "followersCount": 223
        }
    }
) => {
    const navigate = useNavigate();
    function gotoedit(){
        navigate('/tuiter/edit-profile', {replace: true});
    };

    return(
        <>
        <div>
            <div className="position-relative mb-2 wd-bot-padding">
                <img src={profile.bannerPicture} className="w-100" height={200}/>
                <img src={profile.profilePicture} className="wd-profile-avatar position-absolute wd-profile-img-location"/>
                <button onClick={gotoedit} className="float-end rounded-5 " STYLE="background-color:white;margin-top:12px;">Edit Profile</button>
            </div>

            <br/>
            <div className="wd-left-padding">
                <div className="row wd-bot-padding">
                </div>
                <div className="wd-bot-padding">
                    <b STYLE="font-size:20px ">{profile.name}</b>
                    <br/>
                    <a STYLE="color:gray">{profile.handle}</a>
                    <div className="wd-bot-padding"/>
                    <a>{profile.bio}</a>
                </div>
                <div className="row wd-bot-padding" STYLE="color:gray; font-size:13px;">
                    <div className="col-3">
                        <FontAwesomeIcon icon={faLocation}/>
                        <a> {profile.location}</a>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faBirthdayCake}/>
                        <a> Born {profile.dateOfBirth}</a>
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faCalendar}/>
                        <a> Joined {profile.dateJoined}</a>
                    </div>
                </div>
                <div className="row" STYLE="font-size:13px">
                    <div className="col-3">
                        <b>{profile.followingCount}</b>
                        <a STYLE="color:gray"> Following</a>
                    </div>
                    <div className="col-3">
                        <b>{profile.followersCount}</b>
                        <a STYLE="color:gray"> Followers</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProfileItem;