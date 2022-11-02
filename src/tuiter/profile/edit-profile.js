import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import {useDispatch} from "react-redux";
import {saveProfile} from "./profile-reducer";
import {useNavigate} from 'react-router-dom';

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function cancelHandler(){
        navigate('/tuiter/profile', {replace: true});
    };
    const saveHandler = () => {
        var name = document.getElementById("Name").value;
        var bio = document.getElementById("Bio").value;
        var location = document.getElementById("Location").value;
        var website = document.getElementById("Website").value;
        var birthdate = document.getElementById("BirthDate").value;
        const a = [name, bio, location, website, birthdate];
        dispatch(saveProfile(a));
        navigate('/tuiter/profile', {replace: true});
    };
    return(
        <>
        <div className="row">
            <i className="bi bi-x-lg float-start col-1"
               onClick={cancelHandler}></i>
            <h4 className="col-6">Edit Profile</h4>
            <button className="col-2" STYLE="background-color:black; color:white; border-radius: 25px;"
                onClick={() => saveHandler()}>Save</button>
        </div>


        <div>
            <div className="position-relative mb-2" STYLE=" padding-bottom: 60px;">
                <img src={profile.bannerPicture} className="w-100" height={200}/>
                <img src={profile.profilePicture} className="wd-profile-avatar position-absolute wd-profile-img-location"/>
            </div>

            <div className="wd-left-padding wd-bot-padding">
                <div className="wd-border-all">
                    <div STYLE="padding-left:12px;">
                        <label htmlFor="Name" STYLE="color:gray">Name</label>
                        <br/>
                        <input id="Name" STYLE="border-style:none;" defaultValue ={profile.name}/>
                    </div>
                </div>
            </div>

            <div className="wd-left-padding wd-bot-padding">
                <div className="wd-border-all">
                    <div STYLE="padding-left:12px;">
                        <label htmlFor="Bio" STYLE="color:gray">Bio</label>
                        <br/>
                        <textarea cols="60" id="Bio" STYLE="border-style:none;" defaultValue={profile.bio}/>
                    </div>
                </div>
            </div>

            <div className="wd-left-padding wd-bot-padding">
                <div className="wd-border-all">
                    <div STYLE="padding-left:12px;">
                        <label htmlFor="Location" STYLE="color:gray">Location</label>
                        <br/>
                        <input id="Location" STYLE="border-style:none;" defaultValue={profile.location}/>
                    </div>
                </div>
            </div>

            <div className="wd-left-padding wd-bot-padding">
                <div className="wd-border-all">
                    <div STYLE="padding-left:12px;">
                        <label htmlFor="Website" STYLE="color:gray">Website</label>
                        <br/>
                        <input id="Website" STYLE="border-style:none;" defaultValue={profile.website}/>
                    </div>
                </div>
            </div>

            <div className="wd-left-padding wd-bot-padding">
                <div className="wd-border-all">
                    <div STYLE="padding-left:12px;">
                        <label htmlFor="BirthDate" STYLE="color:gray">BirthDate</label>
                        <br/>
                        <input id="BirthDate" STYLE="border-style:none;" defaultValue={profile.dateOfBirth}/>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};
export default EditProfileComponent;